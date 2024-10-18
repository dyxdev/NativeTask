import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {ThemeProvider} from '@/theme/useTheme'
import { translate } from '@/i18n';
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
          title: translate("homeScreen.title"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          tabBarTestID: 'BottomTab.Home',
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: translate("taskScreen.title"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
          tabBarTestID: 'BottomTab.Task',
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: translate("userScreen.title"),
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
