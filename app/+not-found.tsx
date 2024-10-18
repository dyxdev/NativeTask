import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { I18Text } from '@/components/I18Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <I18Text keyText={'error.title'} />
        <Link href="/" style={styles.link}>
        <I18Text keyText={'error.description'} />
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
