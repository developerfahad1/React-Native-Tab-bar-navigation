import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style = {
              focused ? {
                backgroundColor: 'gray',
                bottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderRadius: 20,
              }
              : null
            }>
              
           
            <FontAwesome name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused
                  ? {
                      backgroundColor: 'gray',
                      bottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      borderRadius: 20,
                    }
                  : null
              }
            >
              <Ionicons name="settings-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <View
            style={
              focused
                ? {
                    backgroundColor: 'gray',
                    bottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 20,
                  }
                : null
            }
          >
            <Ionicons name="settings-outline" size={24} color={color} />
          </View>
          ),
        }}
      />
    </Tabs>
  );
}
