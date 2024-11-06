import { ScrollView, Text, View, Image } from "react-native"
import useLanguage from "~/hooks/useLanguage"

import styles from "./styles"

function Match({ route, navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const { mapImage, teams, score, date, time } = route?.params

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mapa} source={mapImage} />

      <View style={styles.painel}>
        <View style={styles.painelTitulo}>
          <Text style={styles.painelCamp}>Brasil</Text>
          <Text style={styles.painelData}>
            {date} - {time}
          </Text>
        </View>

        <View style={styles.times}>
          <Text style={styles.time}>{teams[0].label}</Text>

          <Image style={styles.image} source={teams[0].logo} />

          <Text style={styles.score}>{score}</Text>

          <Image style={styles.image} source={teams[1].logo} />

          <Text style={styles.time}>{teams[1].label}</Text>
        </View>
      </View>

      <View style={styles.statusJogadores}>
        <View style={styles.tab}>
          {/* Titulo */}
          <View style={styles.tabTitulo}>
            <Text style={styles.tabText}>{i18n(lang, "match_players")}</Text>

            <View style={styles.tabStatus}>
              <Text style={styles.tabText}>{i18n(lang, "match_kill")}</Text>
              <Text style={styles.tabText}>{i18n(lang, "match_death")}</Text>
              <Text style={styles.tabText}>{i18n(lang, "match_assists")}</Text>
              <Text style={styles.tabText}>+/-</Text>
            </View>
          </View>

          {/* Jogadores*/}
          {teams[0].players.map((player: any) => (
            <View style={styles.jogador}>
              <Text style={styles.tabText}>{player.name}</Text>

              {!isNaN(player?.kills) ? (
                <View style={styles.jogadorStatus}>
                  <Text style={styles.tabText}>{player.kills}</Text>
                  <Text style={styles.tabText}>{player.deaths}</Text>
                  <Text style={styles.tabText}>{player.assistances}</Text>
                  <Text
                    style={[
                      styles.tabText,
                      player.kills - player.deaths >= 0
                        ? { color: "#0f0" }
                        : { color: "#f00" },
                    ]}
                  >
                    {player.kills - player.deaths}
                  </Text>
                </View>
              ) : (
                <View style={styles.jogadorStatus}>
                  <Text style={styles.tabText}></Text>
                  <Text style={styles.tabText}></Text>
                  <Text style={styles.tabText}></Text>
                  <Text style={{ color: "#ddd" }}>TBA</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.linha}></View>

        <View style={styles.tab}>
          {/* Titulo */}
          <View style={styles.tabTitulo}>
            <Text style={styles.tabText}>{i18n(lang, "match_players")}</Text>

            <View style={styles.tabStatus}>
              <Text style={styles.tabText}>{i18n(lang, "match_kill")}</Text>
              <Text style={styles.tabText}>{i18n(lang, "match_death")}</Text>
              <Text style={styles.tabText}>{i18n(lang, "match_assists")}</Text>
              <Text style={styles.tabText}>+/-</Text>
            </View>
          </View>

          {/* Jogadores*/}
          {teams[1].players.map((player: any) => (
            <View style={styles.jogador}>
              <Text style={styles.tabText}>{player.name}</Text>

              {!isNaN(player?.kills) ? (
                <View style={styles.jogadorStatus}>
                  <Text style={styles.tabText}>{player.kills}</Text>
                  <Text style={styles.tabText}>{player.deaths}</Text>
                  <Text style={styles.tabText}>{player.assistances}</Text>
                  <Text
                    style={[
                      styles.tabText,
                      player.kills - player.deaths >= 0
                        ? { color: "#0f0" }
                        : { color: "#f00" },
                    ]}
                  >
                    {player.kills - player.deaths}
                  </Text>
                </View>
              ) : (
                <View style={styles.jogadorStatus}>
                  <Text style={styles.tabText}></Text>
                  <Text style={styles.tabText}></Text>
                  <Text style={styles.tabText}></Text>
                  <Text style={{ color: "#ddd" }}>TBA</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Match
