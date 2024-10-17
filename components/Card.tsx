import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { spacing } from '../theme/theme';
import { CardPropsType } from '../types/components';
import { ThemedView } from "@/components/ThemedView";

export const Card = ({ children, style }: CardPropsType) => {
  const { theme } = useTheme();
  return (
    <ThemedView style={[
      styles.card,
      { backgroundColor: theme.cardBg, borderColor: theme.cardBorderColor },
      style,
    ]}>{children}</ThemedView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: spacing.layoutPaddingH,
    paddingVertical: spacing.layoutPaddingH,
    borderRadius: spacing.borderRadius,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
});


