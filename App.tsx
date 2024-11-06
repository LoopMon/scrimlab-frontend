import { Image, View, TouchableOpacity, Text } from "react-native"
// import { useFonts } from "expo-font"
// Navigators
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// Providers
import AuthProvider from "~/contexts/auth"
import LanguageProvider from "~/contexts/languages"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Screens
import SignIn from "~/screens/SignIn"
import SignUp from "~/screens/SignUp"
import MatchsResults from "~/screens/MatchResults"
import Config from "~/screens/Config"
import CreateMatch from "~/screens/CreateMatch"
import Teams from "~/screens/Teams"
import SearchMatch from "~/screens/SearchMath"

// Imagens
const ScrimLabHorizontal = require("~/assets/images/scrimlab-horizontal.png")
const Exit = require("~/assets/images/exit.png")
// Criação das constantes de Navegação
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function CustomDrawerContent(props: any) {
  const { signout }: any = useAuth()
  const { i18n, lang }: any = useLanguage()

  return (
    <View
      style={{
        height: "97%", // altura quebrada, mas ideal
      }}
    >
      <Image
        style={{
          width: "70%",
          height: 50,
          objectFit: "cover",
          marginVertical: 20,
          marginHorizontal: "auto",
        }}
        source={ScrimLabHorizontal}
      />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 15,
          marginTop: 15,
        }}
        onPress={() => {
          signout()
          props.navigation.navigate("signin")
          return
        }}
      >
        <Image style={{ width: 20, height: 20 }} source={Exit} />
        <Text style={{ color: "#fff" }}>{i18n(lang, "menuItem_exit")}</Text>
      </TouchableOpacity>
    </View>
  )
}

function MyDrawer() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Drawer.Navigator
      initialRouteName="matchesresults"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#40202C",
          width: 240,
        },
        drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.1)",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="teams"
        component={Teams}
        options={{
          title: i18n(lang, "menuItem_teams"),
          headerTitle: i18n(lang, "menuTitle_teams"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      />

      {/* <Drawer.Screen
        name="dashboard"
        component={DashBoard}
        options={{
          title: i18n(lang, "menuItem_dashboard"),
          headerTitle: i18n(lang, "menuTitle_teams"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      /> */}
      <Drawer.Screen
        name="config"
        component={Config}
        options={{
          title: i18n(lang, "menuItem_languages"),
          headerTitle: i18n(lang, "menuTitle_languages"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="creatematch"
        component={CreateMatch}
        options={{
          title: i18n(lang, "menuItem_createMatch"),
          headerTitle: i18n(lang, "menuTitle_createMatch"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="matchesresults"
        component={MatchsResults}
        options={{
          title: i18n(lang, "menuItem_finishedMatches"),
          headerTitle: i18n(lang, "menuTitle_finishedMatches"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="searchmatch"
        component={SearchMatch}
        options={{
          title: i18n(lang, "menuItem_upcomingMatches"),
          headerTitle: i18n(lang, "menuTitle_upcomingMatches"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
        }}
      />
    </Drawer.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "KronaOne-Regular": require("~/assets/fonts/KronaOne-Regular.ttf"),
  // })

  return (
    <LanguageProvider>
      <AuthProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </AuthProvider>
    </LanguageProvider>
  )
}
