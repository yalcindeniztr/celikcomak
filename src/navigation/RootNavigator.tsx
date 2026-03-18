import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { AuthScreen } from '../features/auth/AuthScreen';
import { HomeScreen } from '../features/home/HomeScreen';

export const RootNavigator = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);

  if (isLocked) {
    return <AuthScreen onUnlocked={() => setIsLocked(false)} />;
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      {!isGameStarted ? (
        <HomeScreen onStart={() => setIsGameStarted(true)} />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white">Oyun Ekranı (2D Side-Scroller)</Text>
          <TouchableOpacity 
            onPress={() => setIsGameStarted(false)}
            className="mt-8 p-4 bg-slate-800 rounded-xl"
          >
            <Text className="text-white">Menüye Dön</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
