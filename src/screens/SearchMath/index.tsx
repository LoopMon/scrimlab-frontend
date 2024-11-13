import { createStackNavigator } from "@react-navigation/stack"
import { useState, useEffect } from "react"
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native"
import RNPickerSelect from "react-native-picker-select"
// Screens
import Match from "../Match"
// Hooks
import useLanguage from "~/hooks/useLanguage"
// Services
import api from "~/services/api"
import maps from "~/services/maps"
// Estilos
import styles from "./styles"

interface TimeProps {
  nome: string
  logo: string
  pais: string
  jogadores: string[]
}
interface PartidaProps {
  nomeMapa: string
  imgMapa: string
  data: string
  score: string
}
interface EstatisticasProps {
  abates: number
  mortes: number
  assistencias: number
}
interface TimeEmPartidaProps {
  _id: string
  idPartida: PartidaProps
  idTime: TimeProps
  estatisticaJogador: EstatisticasProps[]
}

const Stack = createStackNavigator()

function MatchResult({ onPress, src, firstTeam, secondTeam, date }: any) {
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
        <Text style={[styles.itemText, { textAlign: "center" }]}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}

function Screen({ navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const [mapaSelecionado, setMapaSelecionado] = useState("")
  const [partidasPorMapa, setPartidasPorMapa] = useState<TimeEmPartidaProps[]>(
    []
  )

  useEffect(() => {
    const searchMatches = async () => {
      const { data } = await api.get("/timeEmPartida")
      const partidas = await data.timesEmPartida
      const partidasFiltradas = partidas.filter(
        (partida: TimeEmPartidaProps) => {
          return (
            partida.idPartida.nomeMapa.toLowerCase() === mapaSelecionado &&
            partida.idPartida.score.includes("0 : 0")
          )
        }
      )
      setPartidasPorMapa(partidasFiltradas)
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
          pickerProps={{
            style: {
              backgroundColor: "#fff",
            },
          }}
        />
      </View>

      {partidasPorMapa.length != 0 ? (
        partidasPorMapa.map((partida: any, index: number) =>
          index % 2 === 0 ? (
            <MatchResult
              key={index}
              onPress={() => {
                navigation.navigate({
                  name: "match",
                  params: {
                    idPartida1: partida._id,
                    idPartida2: partidasPorMapa[index + 1]._id,
                  },
                })
              }}
              src={partida.idPartida.imgMapa}
              firstTeam={partida.idTime.nome}
              secondTeam={partidasPorMapa[index + 1].idTime.nome}
              date={partida.idPartida.data}
            />
          ) : (
            <Text></Text>
          )
        )
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
