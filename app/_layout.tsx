import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


// -----------
// Root layout
// -----------

export default function RootLayout() {
  return (
    <>
      <Stack 
        screenOptions={{
          headerTintColor: Colors.tint,
          headerStyle: {backgroundColor: Colors.background}
        }}
      >
        <Stack.Screen name="index" options={{headerShown: false}} />
      </Stack>
      <StatusBar hidden />
    </>
  );
}
