import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, ThemeContextInterface } from '../theme/useTheme';
import Card from './Card';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { User } from '@/types/user';
import {RoundedNetworkImage} from '@/components/RoundedImage'

interface ListItemType {
  item: User;
}

export const UserItem = ({ item }: ListItemType): JSX.Element => {
  const { theme }: Partial<ThemeContextInterface> = useTheme();
  
  return (
    <Card style={styles.card}>
      <ThemedView style={styles.row}>
        <ThemedView style={styles.image}>
         <RoundedNetworkImage url={item.avatar}/>
        </ThemedView>
        <ThemedView
          style={[styles.col, { opacity: 1 }]}
        >
          <ThemedText
            style={[
              {
                color: theme?.color,
                fontSize: 18
              },
            ]}>
            {item.name}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  image:{
    width: 30,
    height: 30
  }
});
