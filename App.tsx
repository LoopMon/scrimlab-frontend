import React from "react"
import { StatusBar, ActivityIndicator, View } from "react-native"
import { useFonts } from "expo-font"
// Providers
import AuthProvider from "~/contexts/auth"
import LanguageProvider from "~/contexts/languages"
// Navigation
import { NavigationContainer } from "@react-navigation/native"
import StackRoutes from "~/navigation/Stack"

export default function App() {
  const [fontsLoaded] = useFonts({
    "KronaOne-Regular": require("~/assets/fonts/KronaOne-Regular.ttf"),
  })

  // Enquanto a fonte está carregando, exibe um ActivityIndicator ou qualquer outro componente de loading
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FF4654" />
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="#FF4654" barStyle="light-content" />
      <LanguageProvider>
        <AuthProvider>
          <NavigationContainer>
            <StackRoutes />
          </NavigationContainer>
        </AuthProvider>
      </LanguageProvider>
    </>
  )
}
