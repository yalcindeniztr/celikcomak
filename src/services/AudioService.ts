import { Audio } from 'expo-av';

const HIT_SOUNDS = {
  WOOD_HIT: require('../../assets/sounds/wood_hit.mp3'),
  SWOOSH: require('../../assets/sounds/swoosh.mp3'),
  LANDING: require('../../assets/sounds/landing.mp3'),
};

export class AudioService {
  private static hitSound: Audio.Sound | null = null;

  static async playSound(type: keyof typeof HIT_SOUNDS) {
    try {
      const { sound } = await Audio.Sound.createAsync(HIT_SOUNDS[type]);
      this.hitSound = sound;
      await sound.playAsync();
      
      // Çaldıktan sonra belleği temizle
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.log('Ses çalma hatası:', error);
    }
  }
}
