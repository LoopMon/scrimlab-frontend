import { Image, Text, TouchableOpacity, View } from "react-native"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"
import Fontisto from "@expo/vector-icons/Fontisto"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Screens
import Config from "~/screens/Config"
import CreateMatch from "~/screens/CreateMatch"
import Home from "~/screens/Home"
import MatchsResults from "~/screens/MatchResults"
import SearchMatch from "~/screens/SearchMath"
import Teams from "~/screens/Teams"

const Drawer = createDrawerNavigator()

const ScrimLabHorizontal = require("~/assets/images/scrimlab-horizontal.png")

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
        <Feather name="log-out" size={20} color="#FF4654" />
        <Text style={{ color: "#fff" }}>{i18n(lang, "menuItem_exit")}</Text>
      </TouchableOpacity>
    </View>
  )
}

function DrawerRoutes() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Drawer.Navigator
      initialRouteName="scrimlab"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#40202C",
          width: "80%",
          maxWidth: 280,
        },
        drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.1)",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="scrimlab"
        component={Home}
        options={{
          title: "Tela Inicial",
          headerTitle: "ScrimLab",
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
          drawerIcon: () => <Feather name="home" size={20} color="#FF4654" />,
        }}
      />
      <Drawer.Screen
        name="teams"
        component={Teams}
        options={{
          title: i18n(lang, "menuItem_teams"),
          headerTitle: i18n(lang, "menuTitle_teams"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
          drawerIcon: () => <Feather name="flag" size={20} color="#FF4654" />,
        }}
      />
      <Drawer.Screen
        name="config"
        component={Config}
        options={{
          title: i18n(lang, "menuItem_languages"),
          headerTitle: i18n(lang, "menuTitle_languages"),
          headerStyle: { backgroundColor: "#8C3243" },
          headerTintColor: "#fff",
          drawerIcon: () => <Feather name="globe" size={20} color="#FF4654" />,
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
          drawerIcon: () => (
            <Feather name="plus-circle" size={20} color="#FF4654" />
          ),
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
          drawerIcon: () => (
            <Fontisto name="checkbox-active" size={20} color="#FF4654" />
          ),
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
          drawerIcon: () => (
            <Fontisto name="checkbox-passive" size={20} color="#FF4654" />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerRoutes
