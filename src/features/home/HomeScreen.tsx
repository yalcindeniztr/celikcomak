import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Trophy, ShoppingBag, User, Settings, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { MenuButton } from '../../components/ui/MenuButton';

export const HomeScreen = ({ onStart }: { onStart: () => void }) => (
  <View className="flex-1 items-center justify-center bg-slate-950 p-6">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="items-center"
    >
      <Text className="text-5xl font-black text-emerald-400 mb-2 tracking-tighter">ÇELİK ÇOMAK</Text>
      <Text className="text-slate-400 mb-12 font-medium">LEGEND STRIKE</Text>
      
      <TouchableOpacity 
        onPress={onStart}
        className="w-48 h-48 rounded-full bg-emerald-500 items-center justify-center shadow-2xl shadow-emerald-500/20"
      >
        <Play size={64} color="white" fill="white" />
      </TouchableOpacity>
    </motion.div>

    <View className="flex-row mt-16 w-full justify-around bg-slate-900/50 p-6 rounded-3xl border border-white/5">
      <MenuButton icon={<ShoppingBag color="#94a3b8" />} label="Mağaza" />
      <MenuButton icon={<Trophy color="#94a3b8" />} label="Rekorlar" />
      <MenuButton icon={<User color="#94a3b8" />} label="Profil" />
      <MenuButton icon={<Settings color="#94a3b8" />} label="Ayarlar" />
    </View>
  </View>
);
