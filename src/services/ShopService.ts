import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'STICK' | 'TECHNIQUE' | 'MATERIAL';
  multiplier: number;
}

export const SHOP_ITEMS: ShopItem[] = [
  { id: 's1', name: 'Meşe Dalı', description: 'Standart başlangıç sopası.', price: 0, type: 'STICK', multiplier: 1.0 },
  { id: 's2', name: 'Zımparalanmış Gürgen', description: 'Daha az hava sürtünmesi.', price: 500, type: 'STICK', multiplier: 1.3 },
  { id: 's3', name: 'Karbon Fiber Çomak', description: 'Ultra hafif ve esnek.', price: 5000, type: 'STICK', multiplier: 2.5 },
  { id: 't1', name: 'Bilek Gücü I', description: 'Vuruş hızını %10 artırır.', price: 1000, type: 'TECHNIQUE', multiplier: 0.1 },
  { id: 'm1', name: 'Reçine Tozu', description: 'Tutuşu artırır, hata payını azaltır.', price: 250, type: 'MATERIAL', multiplier: 0.05 },
];

export const ShopService = {
  async buyItem(itemId: string, currentGold: number) {
    const item = SHOP_ITEMS.find(i => i.id === itemId);
    if (!item || currentGold < item.price) return { success: false, message: 'Yetersiz altın!' };

    // Satın alma mantığı (AsyncStorage güncellenir)
    // ...
    return { success: true, newGold: currentGold - item.price };
  }
};
