import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const AuthScreen = ({ onUnlocked }: { onUnlocked: () => void }) => {
  const [pin, setPin] = useState<string | null>(null);

  useEffect(() => {
    async function checkPin() {
      try {
        const savedPin = await SecureStore.getItemAsync('user_pin');
        setPin(savedPin);
        if (!savedPin) onUnlocked(); // İlk kurulumda kilit yok
      } catch (error) {
        // Web ortamı fall-back
        console.warn('SecureStore is not supported on Web. Bypassing lock...');
        onUnlocked();
      }
    }
    checkPin();
  }, [onUnlocked]);

  return (
    <View className="flex-1 bg-slate-950 items-center justify-center p-8">
      <Text className="text-white text-2xl font-bold mb-8">PIN GİRİNİZ</Text>
      <View className="flex-row gap-4 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <View key={`pin-${i}`} className="w-4 h-4 rounded-full bg-slate-800" />
        ))}
      </View>
      <Text className="text-slate-500 text-sm">Profilinize erişmek için PIN gereklidir.</Text>
    </View>
  );
};
