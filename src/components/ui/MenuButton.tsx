import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const MenuButton = ({ icon, label, onPress }: { icon: React.ReactNode; label: string; onPress?: () => void }) => (
  <TouchableOpacity className="items-center" onPress={onPress}>
    <View className="w-12 h-12 bg-slate-800 rounded-2xl items-center justify-center mb-2">
      {icon}
    </View>
    <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest">{label}</Text>
  </TouchableOpacity>
);
