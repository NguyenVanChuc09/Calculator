import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "@/assets/context/ThemeContext";
import { Styles } from "@/assets/styles/GlobalStyles";
import React from "react";

interface ButtonProps {
    onPress: () => void;
    title : string,
    isBlue?: boolean,
    isGray?: boolean,
}

export default function Button({ title, onPress, isBlue, isGray } : ButtonProps ) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style= {
                isBlue
                ? Styles.btnBlue
                : isGray
                ? Styles.btnGray
                : theme === 'light'
                ? Styles.btnLight
                : Styles.btnDark
            }
            onPress={onPress}>
                <Text
                    style={
                        isBlue || isGray
                        ? Styles.smallTextLight
                        : theme === 'dark'
                        ? Styles.smallTextLight
                        : Styles.smallTextDark
                    }>
                        {title}
                </Text>
        </TouchableOpacity>
    )
}