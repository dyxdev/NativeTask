import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {ThemeProvider} from '@/theme/useTheme'
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          tabBarTestID: 'BottomTab.Home',
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
          tabBarTestID: 'BottomTab.Task',
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
          tabBarTestID: 'BottomTab.User',
        }}
      />
    </Tabs>
    </ThemeProvider>
  );
}
