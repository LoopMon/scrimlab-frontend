import { useState, useEffect } from "react"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native"
import RNPickerSelect from "react-native-picker-select"
import { createStackNavigator } from "@react-navigation/stack"
// Screens
import Match from "../Match"
// Components
import TextInputField from "~/components/TextInputField"
import MyButton from "~/components/MyButton"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Services
import api from "~/services/api"
import teams from "~/services/teams"
import maps from "~/services/maps"
// Estilos
import styles from "./styles"

const Stack = createStackNavigator()

function Checkbox({ isChecked, message, onPress }: any) {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <View style={styles.checkboxInner} />}
      </View>
      <Text style={{ color: "#fff" }}>{message}</Text>
    </TouchableOpacity>
  )
}

function Screen({ navigation }: any) {
  const { user }: any = useAuth()
  const { i18n, lang }: any = useLanguage()
  const [selectedMap, setSelectedMap] = useState<string[]>([])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [firstTeam, setFirstTeam] = useState("")
  const [secondTeam, setSecondTeam] = useState("")
  const [firstTeamLogo, setFirstTeamLogo] = useState("")
  const [secondTeamLogo, setSecondTeamLogo] = useState("")
  const [firstTeamScore, setFirstTeamScore] = useState("")
  const [secondTeamScore, setSecondTeamScore] = useState("")
  const [isSelected, setSelection] = useState(false)
  const [error, setError] = useState("")

  const createMatch = async () => {
    if (firstTeam === secondTeam) {
      setError(i18n(lang, "createMatchError_differentTeams"))
      return
    }

    if (!isSelected) {
      const team1: any = teams.find((team: any) => team.value === firstTeam)
      team1.players = team1.players.map((player: any) => {
        return {
          name: player.name,
          image: player.image,
        }
      })

      const team2: any = teams.find((team: any) => team.value === secondTeam)
      team2.players = team2.players.map((player: any) => {
        return {
          name: player.name,
          image: player.image,
        }
      })

      const response = await api.post1("/matches", {
        map: selectedMap[0],
        mapImage: selectedMap[1],
        teams: [team1, team2],
        score: "0 : 0",
        date: date,
        time: time,
        idCreator: user.id,
      })

      const dashboard = await api.get2("/dashboard")

      const updateDashBoard = await api.put2("/dashboard/1", {
        totalMatches: Number(dashboard[0].totalMatches) + 1,
      })

      // reset dos campos
      setDate("")
      setTime("")
      setFirstTeamLogo("")
      setSecondTeamLogo("")
      setFirstTeamScore("")
      setSecondTeamScore("")
      setSelection(false)
      setError("")

      navigation.navigate({
        name: "match",
        params: {
          map: selectedMap[0],
          mapImage: selectedMap[1],
          teams: [
            teams.find((team: any) => team.value === firstTeam),
            teams.find((team: any) => team.value === secondTeam),
          ],
          score: "0 : 0",
          date: date,
          time: time,
          idCreator: user.id,
        },
      })
      return
    }

    if (
      !(
        (+firstTeamScore === 13 && +secondTeamScore < 13) ||
        (+firstTeamScore < 13 && +secondTeamScore === 13)
      )
    ) {
      setError("Pelo menos 1 dos times deve ter 13")
      return
    }

    const team1: any = teams.find((team: any) => team.value === firstTeam)
    team1.players = team1.players.map((player: any) => {
      return {
        ...player,
        kills: Math.floor(Math.random() * 40) + 1,
        deaths: Math.floor(Math.random() * 30) + 1,
        assistances: Math.floor(Math.random() * 20) + 1,
      }
    })

    const team2: any = teams.find((team: any) => team.value === secondTeam)
    team2.players = team2.players.map((player: any) => {
      return {
        ...player,
        kills: Math.floor(Math.random() * 40) + 1,
        deaths: Math.floor(Math.random() * 30) + 1,
        assistances: Math.floor(Math.random() * 20) + 1,
      }
    })

    const response = await api.post1("/matches", {
      map: selectedMap[0],
      mapImage: selectedMap[1],
      teams: [team1, team2],
      score: `${firstTeamScore} : ${secondTeamScore}`,
      date: date,
      time: time,
      idCreator: user.id,
    })
    const dashboard = await api.get2("/dashboard")

    const updateDashBoard = await api.put2("/dashboard/1", {
      totalMatches: Number(dashboard[0].totalMatches) + 1,
      finalizedMatches: Number(dashboard[0].finalizedMatches) + 1,
    })

    // reset dos campos
    setDate("")
    setTime("")
    setFirstTeamLogo("")
    setSecondTeamLogo("")
    setFirstTeamScore("")
    setSecondTeamScore("")
    setSelection(false)
    setError("")

    navigation.navigate({
      name: "match",
      params: {
        map: selectedMap[0],
        mapImage: selectedMap[1],
        teams: [team1, team2],
        score: `${firstTeamScore} : ${secondTeamScore}`,
        date: date,
        time: time,
        idCreator: user.id,
      },
    })
    return
  }

  const handleChange = (setValue: any, text: any) => {
    const numericValue = text.replace(/[^0-9]/g, "")

    const numValue = parseInt(numericValue, 10)

    if (!isNaN(numValue) && numValue >= 1 && numValue <= 13) {
      setValue(numericValue)
    } else if (numericValue === "") {
      setValue("")
    }
  }

  useEffect(() => {
    const teamObj: any = teams.find((team) => {
      return team.value == firstTeam
    })
    setFirstTeamLogo(teamObj?.logo)
  }, [firstTeam])

  useEffect(() => {
    const teamObj: any = teams.find((team) => {
      return team.value == secondTeam
    })
    setSecondTeamLogo(teamObj?.logo)
  }, [secondTeam])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formField}>
          <Text style={styles.label}>{i18n(lang, "createMatch_map")}:</Text>
          <RNPickerSelect
            placeholder={{
              label: i18n(lang, "createMatch_selectItem"),
              value: null,
            }}
            onValueChange={(valor: string) => {
              if (typeof valor === "string") {
                const array: string[] = valor.split(",")
                setSelectedMap(array)
              }
            }}
            items={maps}
            pickerProps={{
              style: {
                width: "90%",
                marginHorizontal: "auto",
                backgroundColor: "#fff",
              },
            }}
          />
        </View>

        <TextInputField
          label={i18n(lang, "createMatch_date")}
          value={date}
          onChange={setDate}
          placeholder={"Ex.: 12/02"}
        />

        <TextInputField
          label={i18n(lang, "createMatch_time")}
          value={time}
          onChange={setTime}
          placeholder={"Ex.: 00:00 (24h)"}
        />

        <View style={styles.formField}>
          <Text style={styles.label}>
            {i18n(lang, "createMatch_firstTeam")}:
          </Text>
          <RNPickerSelect
            placeholder={{
              label: i18n(lang, "createMatch_selectItem"),
              value: null,
            }}
            onValueChange={(value) => setFirstTeam(value)}
            items={teams}
            pickerProps={{
              style: {
                width: "90%",
                marginHorizontal: "auto",
                backgroundColor: "#fff",
              },
            }}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>
            {i18n(lang, "createMatch_secondTeam")}:
          </Text>
          <RNPickerSelect
            placeholder={{
              label: i18n(lang, "createMatch_selectItem"),
              value: null,
            }}
            onValueChange={(value) => setSecondTeam(value)}
            items={teams}
            pickerProps={{
              style: {
                width: "90%",
                marginHorizontal: "auto",
                backgroundColor: "#fff",
              },
            }}
          />
        </View>

        <View>
          <Checkbox
            isChecked={isSelected}
            message={i18n(lang, "createMatch_matchFinished")}
            onPress={() => setSelection(!isSelected)}
          />
        </View>

        {isSelected ? (
          <View>
            <Text style={styles.label}>
              {i18n(lang, "createMatch_matchPoints")}:
            </Text>
            <View style={styles.placar}>
              <Image
                style={styles.placarImage}
                source={{ uri: firstTeamLogo }}
              />
              <TextInput
                keyboardType="numeric"
                value={firstTeamScore}
                onChangeText={(value) => {
                  handleChange(setFirstTeamScore, value)
                }}
                style={styles.placarScore}
              />
              <Text style={styles.placarTexto}>:</Text>
              <TextInput
                keyboardType="numeric"
                value={secondTeamScore}
                onChangeText={(value) => {
                  handleChange(setSecondTeamScore, value)
                }}
                style={styles.placarScore}
              />
              <Image
                style={styles.placarImage}
                source={{ uri: secondTeamLogo }}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}

        <Text style={{ color: "#f00" }}>{error}</Text>

        <MyButton
          label={i18n(lang, "createMatch_submitButton")}
          onPress={createMatch}
          disabled={
            !selectedMap[0] ||
            !date ||
            !time ||
            !firstTeam ||
            !secondTeam ||
            (isSelected && (!firstTeamScore || !secondTeamScore))
          }
        />
      </View>
    </ScrollView>
  )
}

function CreateMatch() {
  const { i18n, lang }: any = useLanguage()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="createmach"
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

export default CreateMatch
