/**
 * AudioService - Ses Hizmeti
 * Ses dosyaları henüz mevcut olmadığı için güvenli mod ile çalışır.
 * assets/sounds/ dizinine ses dosyaları eklendiğinde otomatik aktif olur.
 */

let Audio: any = null;

try {
  // expo-av'ı dinamik olarak yükle - mevcut değilse crash olmaz
  Audio = require('expo-av').Audio;
} catch {
  console.warn('expo-av yüklenemedi, ses hizmeti devre dışı.');
}

const SOUND_ENABLED = false; // Ses dosyaları eklendiğinde true yapılacak

export class AudioService {
  private static hitSound: any = null;

  static async playSound(type: string) {
    if (!SOUND_ENABLED || !Audio) {
      return; // Ses hizmeti devre dışı, sessizce geç
    }

    try {
      // Gelecekte ses dosyaları eklendiğinde burada aktif edilecek
      console.log(`Ses çalınacak: ${type}`);
    } catch (error) {
      console.log('Ses çalma hatası:', error);
    }
  }
}
