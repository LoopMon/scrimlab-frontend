import { View, Text, Image } from "react-native"
import useLanguage from "~/hooks/useLanguage"

import styles from "./styles"

interface TimeProps {
  nome: string
  logo: string
  pais: string
  jogadores: string[]
}
interface JogadorProps {
  nome: string
  imagem: string
}

function Player({ nome, imagem }: JogadorProps) {
  return (
    <View style={styles.jogador}>
      <Image source={{ uri: imagem }} style={styles.jogadorImg} />
      <Text style={{ color: "#fff" }}>{nome}</Text>
    </View>
  )
}

function Team({ route, navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const time: TimeProps = route?.params

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Image source={{ uri: time.logo }} style={styles.timeLogo} />
        <View style={styles.timeDesc}>
          <Text style={{ fontSize: 18, color: "#fff" }}>{time.nome}</Text>
          <Text style={{ fontSize: 12, color: "#fff" }}>{time.pais}</Text>
        </View>
      </View>

      <View style={styles.jogadores}>
        <Text style={{ width: "100%", color: "#fff", textAlign: "left" }}>
          {i18n(lang, "team_currentTeam")}
        </Text>
        {time ? (
          time.jogadores.map((player: any, index: any) => (
            <Player key={index} nome={player.nome} imagem={player.imagem} />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  )
}

export default Team
