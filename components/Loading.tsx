import { I18Text } from "./I18Text";
import { ThemedView } from "./ThemedView"
import {ActivityIndicator, StyleSheet} from 'react-native';

export const LoadingIndicator = ()=>{
    return (
        <ThemedView style={[styles.col,styles.container]}>
                <ActivityIndicator color="#008000" size="large"></ActivityIndicator>
                <I18Text keyText="common.loading" style={styles.text} />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    col: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems:"center",
      padding: 10,
    },
    text: {
        fontSize: 20,
    },
  });