import * as React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

import { useTheme } from '@/theme/useTheme';

export type ButtonProps = {
    onPress?: () => void;
    text?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
    testID?:string
};

/**
 * A reusable button with themed style.
 *
 * @param {ButtonProps} props - The component's properties.
 * @returns {JSX.Element} The rendered button.
 */
export const Button = ({ onPress, text, children, style, testID }: ButtonProps) => {
    const { theme } = useTheme();
    return (
        <Pressable
            testID={testID}
            style={({ pressed }) => [
                styles.container,
                { backgroundColor: pressed ? `${theme?.primary}ee` : theme?.primary },
                style,
            ]}
            onPress={onPress}>
            {children && <>{children}</>}
            {text ? <Text style={styles.text}>{text}</Text> : <></>}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    text: { color: 'white' },
});
