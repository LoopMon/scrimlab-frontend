import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import useLanguage from "~/hooks/useLanguage"
import Team from "~/screens/Team"
import teams from "~/services/teams"

import styles from "./styles"

const Stack = createStackNavigator()

function TeamComponent({ src, team }: any) {
  return (
    <View style={styles.team}>
      <Image style={styles.image} source={{ uri: src }} />
      <Text style={{ color: "#fff" }}>{team}</Text>
    </View>
  )
}

function Screen({ navigation }: any) {
  return (
    <ScrollView style={{ backgroundColor: "#111C26" }}>
      <View style={styles.container}>
        {teams.map((team, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: "Team",
                params: teams[index],
              })
            }}
          >
            <TeamComponent key={index} src={team.logo} team={team.name} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

function Teams() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Teams"
        component={Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Team"
        component={Team}
        options={{
          title: i18n(lang, "menuItem_upcomingMatches"),
          headerTitle: i18n(lang, "matchesResults_team"),
          headerStyle: { backgroundColor: "#40202C" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  )
}

export default Teams
