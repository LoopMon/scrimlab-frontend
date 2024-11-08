import { useState, useEffect } from "react"
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import RNPickerSelect from "react-native-picker-select"
// Screens
import Match from "../Match"
// Hooks
import useLanguage from "../../hooks/useLanguage"
// Services
import api from "../../services/api"
import maps from "../../services/maps"
// Estilos
import styles from "./styles"

const Stack = createStackNavigator()

function MatchResult({ onPress, src, firstTeam, secondTeam, date, time }: any) {
  const { i18n, lang }: any = useLanguage()

  return (
    <TouchableOpacity style={styles.list} onPress={onPress}>
      <Image style={styles.image} source={{ uri: src }} />

      <View style={styles.item}>
        <Text style={styles.itemTitle}>
          {i18n(lang, "matchesResults_team")}
        </Text>
        <Text style={styles.itemText}>{firstTeam}</Text>
        <Text style={styles.itemText}>{secondTeam}</Text>

        <Text style={styles.itemTitle}>
          {i18n(lang, "matchesResults_time")}
        </Text>
        <Text style={[styles.itemText, { textAlign: "center" }]}>
          {date} - {time}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function Screen({ navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const [mapaSelecionado, setMapaSelecionado] = useState("")
  const [partidas, setPartidas] = useState([])

  useEffect(() => {
    const searchMatches = async () => {
      const matchesResponse = await api.get("/partidas")
      const data = matchesResponse.filter((match: any) => {
        return match.map === mapaSelecionado && match.score == "0 : 0"
      })
      setPartidas(data)
    }

    searchMatches()
  }, [mapaSelecionado])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.title}>
          {i18n(lang, "matchesResults_selectMap")}:
        </Text>
        <RNPickerSelect
          onValueChange={(valor: string) => {
            setMapaSelecionado(valor[0])
          }}
          items={maps}
        />
      </View>

      {partidas.length != 0 ? (
        <FlatList
          data={partidas}
          renderItem={({ item }: any) => (
            <MatchResult
              onPress={() => {
                navigation.navigate({
                  name: "match",
                  params: item,
                })
              }}
              src={item.mapImage}
              firstTeam={item.teams[0].label}
              secondTeam={item.teams[1].label}
              date={item.date}
              time={item.time}
            />
          )}
        />
      ) : mapaSelecionado != "" ? (
        <Text style={styles.label}>{i18n(lang, "noResults")}</Text>
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  )
}

function SearchMatch() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="match"
        component={Match}
        options={{
          title: i18n(lang, "menuItem_upcomingMatches"),
          headerTitle: i18n(lang, "match_title"),
          headerStyle: { backgroundColor: "#40202C" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchMatch
