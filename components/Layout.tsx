import React, { PropsWithChildren } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/theme/useTheme';

interface Props {
    title:string,
    icon:string
}
export function Layout({title,icon,children}:PropsWithChildren<Props>) {
  const {theme} = useTheme()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: theme?.primary, dark: '#353636' }}
      headerImage={<Ionicons size={150} name={icon as any} color="#f6f6f6" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{title}</ThemedText>
      </ThemedView>
      {children}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

