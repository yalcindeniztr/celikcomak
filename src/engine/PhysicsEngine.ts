/**
 * Çelik Çomak Fizik Motoru
 * Vuruş gücü, açı ve mesafe hesaplamalarını yapar.
 */

export interface HitResult {
  distance: number;
  height: number;
  isPerfect: boolean;
  earnedGold: number;
}

export const PhysicsEngine = {
  calculateHit(
    swipeSpeed: number, 
    hitTiming: number, // 0.0 ile 1.0 arası (0.5 perfect)
    stickQuality: number, // 1.0 (başlangıç) - 5.0 (efsanevi)
    techniqueLevel: number
  ): HitResult {
    // Zamanlama hassasiyeti (0.5'e ne kadar yakınsa o kadar iyi)
    const timingDiff = Math.abs(0.5 - hitTiming);
    const isPerfect = timingDiff < 0.05;
    
    // Temel mesafe formülü
    let distance = (swipeSpeed * (1 - timingDiff)) * stickQuality * (1 + techniqueLevel * 0.1);
    
    // Perfect hit bonusu
    if (isPerfect) distance *= 1.5;

    // Altın hesaplama (Mesafe / 10, zor kazanılması için düşük tutuldu)
    const earnedGold = Math.floor(distance / 10);

    return {
      distance: parseFloat(distance.toFixed(2)),
      height: parseFloat((swipeSpeed / 2).toFixed(2)),
      isPerfect,
      earnedGold
    };
  }
};
