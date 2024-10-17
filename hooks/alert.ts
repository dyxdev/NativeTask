import { Alert } from "react-native";

export const useAlerts = () => {
    const showAlertConfirm = (operation:string,onDismiss:()=>void) =>
        Alert.alert(
          'Alert',
          `${operation} operation cannot be reversed`,
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {
              text: 'Continue',
              onPress: onDismiss,
              style: 'destructive',
            },
          ],
          {
            cancelable: true,
            onDismiss: onDismiss,
          },
    );

    return {
        showAlertConfirm
    }
}