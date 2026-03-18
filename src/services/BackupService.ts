import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKUP_FILE_NAME = 'celik_comak_backup.json';
const BACKUP_PATH = `${FileSystem.documentDirectory}${BACKUP_FILE_NAME}`;

export const BackupService = {
  /**
   * Tüm yerel verileri bir JSON dosyasına yedekler.
   */
  async createBackup() {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allData = await AsyncStorage.multiGet(allKeys);
      const backupData = JSON.stringify(Object.fromEntries(allData));
      
      await FileSystem.writeAsStringAsync(BACKUP_PATH, backupData);
      console.log('Yedekleme başarılı:', BACKUP_PATH);
      return true;
    } catch (error) {
      console.error('Yedekleme hatası:', error);
      return false;
    }
  },

  /**
   * Yedek dosyasını okur ve AsyncStorage'a geri yükler.
   */
  async restoreBackup() {
    try {
      const fileInfo = await FileSystem.getInfoAsync(BACKUP_PATH);
      if (!fileInfo.exists) {
        console.log('Yedek dosyası bulunamadı.');
        return false;
      }

      const backupDataRaw = await FileSystem.readAsStringAsync(BACKUP_PATH);
      const backupData = JSON.parse(backupDataRaw);

      const entries = Object.entries(backupData).map(([key, value]) => [key, String(value)] as [string, string]);
      await AsyncStorage.multiSet(entries);
      
      console.log('Geri yükleme başarılı.');
      return true;
    } catch (error) {
      console.error('Geri yükleme hatası:', error);
      return false;
    }
  },

  /**
   * Kullanıcının yedeği telefondan dışarı aktarmasını sağlar.
   */
  async exportBackup() {
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(BACKUP_PATH);
    }
  },

  /**
   * Tüm verileri tek tıkla temizler (GDPR uyumu).
   */
  async clearAllData() {
    try {
      await AsyncStorage.clear();
      if ((await FileSystem.getInfoAsync(BACKUP_PATH)).exists) {
        await FileSystem.deleteAsync(BACKUP_PATH);
      }
      return true;
    } catch (error) {
      return false;
    }
  }
};
