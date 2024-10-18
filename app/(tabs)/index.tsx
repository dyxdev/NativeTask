import {StyleSheet} from "react-native"
import { Layout } from "@/components/Layout";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/Button";
import { useUtilsNavigation } from "@/hooks/navigation";
import { translate } from "@/i18n";
import { I18Text } from "@/components/I18Text";


export default function HomeScreen() {
  const {goTo} = useUtilsNavigation()
  return (
    <Layout icon='home' title={translate("homeScreen.title")}>
        <ThemedView style={styles.container}>
                <Button onPress={()=>goTo("/(tabs)/tasks")}>
                    <I18Text keyText="homeScreen.task" style={styles.text} />
                </Button>
                <Button onPress={()=>goTo("/(tabs)/users")}>
                    <I18Text keyText="homeScreen.list" style={styles.text} />
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
