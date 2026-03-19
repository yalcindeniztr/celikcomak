import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Trophy, ShoppingBag, User, Settings, Play } from 'lucide-react-native';
import { MenuButton } from '../../components/ui/MenuButton';

export const HomeScreen = ({ onStart }: { onStart: () => void }) => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 p-6">
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
          alignItems: 'center',
        }}
      >
        <Text className="text-5xl font-black text-emerald-400 mb-2 tracking-tighter">ÇELİK ÇOMAK</Text>
        <Text className="text-slate-400 mb-12 font-medium">LEGEND STRIKE</Text>

        <TouchableOpacity
          onPress={onStart}
          className="w-48 h-48 rounded-full bg-emerald-500 items-center justify-center"
          style={{
            shadowColor: '#10b981',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 16,
            elevation: 12,
          }}
        >
          <Play size={64} color="white" fill="white" />
        </TouchableOpacity>
      </Animated.View>

      <View className="flex-row mt-16 w-full justify-around bg-slate-900/50 p-6 rounded-3xl border border-white/5">
        <MenuButton icon={<ShoppingBag color="#94a3b8" />} label="Mağaza" />
        <MenuButton icon={<Trophy color="#94a3b8" />} label="Rekorlar" />
        <MenuButton icon={<User color="#94a3b8" />} label="Profil" />
        <MenuButton icon={<Settings color="#94a3b8" />} label="Ayarlar" />
      </View>
    </View>
  );
};
