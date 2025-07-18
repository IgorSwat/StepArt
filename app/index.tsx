import NavButton from "@/components/navButton";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


// -----------------
// Start screen view
// -----------------

export default function StartScreen() {

  // 1. Component JSX structure
  // --------------------------

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false, 
          headerShadowVisible: false,
        }} 
      />
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        imageStyle={{opacity: 0.88}}
        style={styles.container}
      >
        <Text style={styles.title}>
          STEP ART
        </Text>
        <View style={styles.navPanel}>
          <NavButton
            iconName="home"
            tooltipText=""
            onClick={() => {}}
            style={navButtonStyle}
          />
          <NavButton
            iconName="details"
            tooltipText=""
            onClick={() => {}}
            style={navButtonStyle}
          />
          <NavButton
            iconName="launch"
            tooltipText=""
            onClick={() => {}}
            style={navButtonStyle}
          />
        </View>
      </ImageBackground>
    </>
  );
}


// --------------------------
// Start screen view - styles
// --------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: Colors.neon,
    textShadowColor: '#008080',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 8,
    letterSpacing: 2,
    textAlign: 'center',
    marginVertical: 30,
    paddingTop: 60
  },
  navPanel: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const navButtonStyle = {
  width: 100,
  height: 100,
  borderWidth: 10,
  iconSize: 50,
  marginHorizontal: 16
};