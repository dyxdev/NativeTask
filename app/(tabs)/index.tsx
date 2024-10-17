import {StyleSheet} from "react-native"
import { Layout } from "@/components/Layout";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { useUtilsNavigation } from "@/hooks/navigation";


export default function HomeScreen() {
  const {goTo} = useUtilsNavigation()
  return (
    <Layout icon='home' title="Home">
        <ThemedView style={styles.container}>
                <Button onPress={()=>goTo("/(tabs)/tasks")}>
                    <ThemedText style={styles.text}>
                         Go to tasks
                    </ThemedText>
                </Button>
                <Button onPress={()=>goTo("/(tabs)\\users")}>
                    <ThemedText style={styles.text}>
                         Go to list
                    </ThemedText>
                </Button>
        </ThemedView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    display: "flex"
  },
  text:{
    color: '#fff',
    fontSize: 18
  }
});
