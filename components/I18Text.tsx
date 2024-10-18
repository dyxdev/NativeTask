import { translate, TxKeyPath } from "@/i18n";
import { ThemedText } from "./ThemedText"
import { TextProps } from "react-native";

export type I18TextProps =  TextProps &{
    keyText: TxKeyPath
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};
export const I18Text = ({ keyText, ...rest }: I18TextProps) => {
    return <ThemedText {...rest}>
        {translate(keyText)}
    </ThemedText>
}