import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { JSX } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";


// --------------------------------------------
// Navigation button component - helper defines
// --------------------------------------------

// Define button props type to enhance readability
export type NavButtonProps = {
    iconName: keyof typeof MaterialIcons.glyphMap;
    tooltipText?: string;
    onClick: () => void;
    style?: ViewStyle & {iconSize?: number};
};


// ---------------------------
// Navigation button component
// ---------------------------

export default function NavButton(
    {iconName, tooltipText, onClick, style} : NavButtonProps
): JSX.Element {

    // 1. Component JSX structure
    // --------------------------

    return (
        <Pressable
            style={({pressed}) => [
                {...styles.buttonDefault, ...style},
                pressed && styles.buttonPressed
            ]}
        >
            <MaterialIcons 
                name={iconName}
                size={style?.iconSize ?? 24}
                color={Colors.icon}
            />

        </Pressable>
    );
}


// ------------------------------------
// Navigation button component - styles
// ------------------------------------

const styles = StyleSheet.create({
    buttonDefault: {
        alignItems: "center",
        justifyContent: "center",

        width: 40,
        height: 40,
        borderRadius: "25%",
        backgroundColor: Colors.tabIconDefault,
        borderWidth: 8,
        borderColor: Colors.background,

        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Android
        elevation: 4
    },
    buttonPressed: {
        backgroundColor: Colors.tabIconSelected
    }
})