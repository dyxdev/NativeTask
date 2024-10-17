import * as React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useTheme, ThemeContextInterface} from '../theme/useTheme';
import Card from './Card';
import {ThemedText} from './ThemedText';
import {Task} from "@/types/task"
import Ionicons from "@expo/vector-icons/Ionicons"
import { ThemedView } from './ThemedView';

interface ListItemType {
  item: Task;
  onPressDelete: (t: Task) => void;
}

export const TaskItem = ({item, onPressDelete}: ListItemType): JSX.Element => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();

  return (
    <Card style={styles.card}>
      <ThemedView
        style={[styles.row, {opacity: 1}]}
       >
        <ThemedText
          style={[
            {
              color: theme?.color
            },
          ]}>
          {item.description}
        </ThemedText>
        <Pressable onPress={()=>onPressDelete(item)}>
            <Ionicons name="trash" size={20} color={theme.error} />
        </Pressable>
      </ThemedView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
});
