import { View, Text, Image, ScrollView } from "react-native"
import useLanguage from "~/hooks/useLanguage"

import styles from "./styles"

function Player({ src, name }: any) {
  return (
    <View style={styles.jogador}>
      <Image source={{ uri: src }} style={styles.jogadorImg} />
      <Text style={{ color: "#fff" }}>{name}</Text>
    </View>
  )
}

function Team({ route, navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const team = route?.params

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Image source={{ uri: team.logo }} style={styles.timeLogo} />
        <View style={styles.timeDesc}>
          <Text style={{ fontSize: 18, color: "#fff" }}>{team.name}</Text>
          <Text style={{ fontSize: 12, color: "#fff" }}>{team.country}</Text>
        </View>
      </View>

      <View style={styles.jogadores}>
        <Text style={{ width: "100%", color: "#fff", textAlign: "left" }}>
          {i18n(lang, "team_currentTeam")}
        </Text>
        {team ? (
          team.players.map((player: any, index: any) => (
            <Player key={index} src={player.image} name={player.name} />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  )
}

export default Team
