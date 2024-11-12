import { useEffect, useState } from "react"
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
// Hooks
import useLanguage from "~/hooks/useLanguage"
// Screens
import Team from "~/screens/Team"
// Services
import api from "~/services/api"

import styles from "./styles"

interface TimeProps {
  nome: string
  logo: string
  pais: string
  jogadores: string[]
}

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
  const [times, setTimes] = useState<any>()

  const carregarTimes = async () => {
    const { data } = await api.get("/time")
    const dataTimes = await data.times
    setTimes(dataTimes)
  }

  useEffect(() => {
    carregarTimes()
  })

  return (
    <ScrollView style={{ backgroundColor: "#111C26" }}>
      <View style={styles.container}>
        {times ? (
          times.map((time: TimeProps, index: number) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: "Team",
                  params: times[index],
                })
              }}
            >
              <TeamComponent key={index} src={time.logo} team={time.nome} />
            </TouchableOpacity>
          ))
        ) : (
          <Text>Carregando Times ...</Text>
        )}
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
