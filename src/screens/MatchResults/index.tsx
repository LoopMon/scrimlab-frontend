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
import Match from "~/screens/Match"
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

function MatchResult({ onPress, src, firstTeamId, secondTeamId, date }: any) {
  const { i18n, lang }: any = useLanguage()

  const formatarData = (dateString: string) => {
    const date = new Date(dateString)

    const dia = String(date.getDate()).padStart(2, "0")
    const mes = String(date.getMonth() + 1).padStart(2, "0")
    const ano = String(date.getFullYear()).slice(-2)

    const hora = String(date.getHours()).padStart(2, "0")
    const minutos = String(date.getMinutes()).padStart(2, "0")

    // Formata a data e a hora
    const dataFormatada = `${dia}/${mes}/${ano}`
    const horaFormatada = `${hora}h${minutos}m`

    return `${dataFormatada} ${horaFormatada}`
  }

  return (
    <TouchableOpacity style={styles.list} onPress={onPress}>
      <Image style={styles.image} source={{ uri: src }} />

      <View style={styles.item}>
        <Text style={styles.itemTitle}>
          {i18n(lang, "matchesResults_team")}
        </Text>
        <Text style={styles.itemText}>{firstTeamId}</Text>
        <Text style={styles.itemText}>{secondTeamId}</Text>

        <Text style={styles.itemTitle}>
          {i18n(lang, "matchesResults_time")}
        </Text>
        <Text style={[styles.itemText, { textAlign: "center" }]}>
          {formatarData(date)}
        </Text>
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
            partida.idPartida.score != "0 : 0"
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
              firstTeamId={partida.idTime.nome}
              secondTeamId={partidasPorMapa[index + 1].idTime.nome}
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

function MatchsResults() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="results"
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

export default MatchsResults
