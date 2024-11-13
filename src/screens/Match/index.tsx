import { useEffect, useState } from "react"
import { ScrollView, Text, View, Image } from "react-native"
import useLanguage from "~/hooks/useLanguage"

import styles from "./styles"
import api from "~/services/api"

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
  idPartida: PartidaProps
  idTime: TimeProps
  estatisticaJogador: EstatisticasProps[]
}

function Match({ route, navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const { idPartida1, idPartida2 } = route?.params
  const [partida1, setPartida1] = useState<TimeEmPartidaProps>()
  const [partida2, setPartida2] = useState<TimeEmPartidaProps>()

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

  useEffect(() => {
    const buscarPartida1 = async () => {
      const { data } = await api.get(`/timeEmPartida/${idPartida1}`)
      const dataPartida = await data.partida

      setPartida1(dataPartida)
    }

    buscarPartida1()
  })

  useEffect(() => {
    const buscarPartida2 = async () => {
      const { data } = await api.get(`/timeEmPartida/${idPartida2}`)
      const dataPartida = await data.partida

      setPartida2(dataPartida)
    }

    buscarPartida2()
  })

  return (
    <ScrollView style={styles.container}>
      {partida1 && partida2 ? (
        <>
          <Image
            style={styles.mapa}
            source={{ uri: partida1.idPartida.imgMapa }}
          />

          <View style={styles.painel}>
            <View style={styles.painelTitulo}>
              <Text style={styles.painelCamp}>Brasil</Text>
              <Text style={styles.painelData}>{partida1.idPartida.data}</Text>
            </View>

            <View style={styles.times}>
              <Text style={styles.time}>{partida1.idTime.nome}</Text>

              <Image
                style={styles.image}
                source={{ uri: partida1.idTime.logo }}
              />

              <Text style={styles.score}>{partida1.idPartida.score}</Text>

              <Image
                style={styles.image}
                source={{ uri: partida2.idTime.logo }}
              />

              <Text style={styles.time}>{partida2.idTime.nome}</Text>
            </View>
          </View>

          <View style={styles.statusJogadores}>
            <View style={styles.tab}>
              {/* Titulo */}
              <View style={styles.tabTitulo}>
                <Text style={styles.tabText}>
                  {i18n(lang, "match_players")}
                </Text>

                <View style={styles.tabStatus}>
                  <Text style={styles.tabText}>{i18n(lang, "match_kill")}</Text>
                  <Text style={styles.tabText}>
                    {i18n(lang, "match_death")}
                  </Text>
                  <Text style={styles.tabText}>
                    {i18n(lang, "match_assists")}
                  </Text>
                  <Text style={styles.tabText}>+/-</Text>
                </View>
              </View>

              {/* Jogadores*/}
              {partida1.idTime.jogadores.map((jogador: any, index: number) => (
                <View style={styles.jogador}>
                  <Text style={styles.tabText}>{jogador.nome}</Text>

                  {!isNaN(jogador?.abates) ? (
                    <View style={styles.jogadorStatus}>
                      <Text style={styles.tabText}>
                        {partida1.estatisticaJogador[index].abates}
                      </Text>
                      <Text style={styles.tabText}>
                        {partida1.estatisticaJogador[index].mortes}
                      </Text>
                      <Text style={styles.tabText}>
                        {partida1.estatisticaJogador[index].assistencias}
                      </Text>
                      <Text
                        style={[
                          styles.tabText,
                          jogador.abates - jogador.mortes >= 0
                            ? { color: "#0f0" }
                            : { color: "#f00" },
                        ]}
                      >
                        {jogador.abates - jogador.mortes}
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
                <Text style={styles.tabText}>
                  {i18n(lang, "match_players")}
                </Text>

                <View style={styles.tabStatus}>
                  <Text style={styles.tabText}>{i18n(lang, "match_kill")}</Text>
                  <Text style={styles.tabText}>
                    {i18n(lang, "match_death")}
                  </Text>
                  <Text style={styles.tabText}>
                    {i18n(lang, "match_assists")}
                  </Text>
                  <Text style={styles.tabText}>+/-</Text>
                </View>
              </View>

              {/* Jogadores*/}
              {partida2.idTime.jogadores.map((jogador: any) => (
                <View style={styles.jogador}>
                  <Text style={styles.tabText}>{jogador.nome}</Text>

                  {!isNaN(jogador?.abates) ? (
                    <View style={styles.jogadorStatus}>
                      <Text style={styles.tabText}>{jogador.abates}</Text>
                      <Text style={styles.tabText}>{jogador.mortes}</Text>
                      <Text style={styles.tabText}>{jogador.assistencias}</Text>
                      <Text
                        style={[
                          styles.tabText,
                          jogador.abates - jogador.mortes >= 0
                            ? { color: "#0f0" }
                            : { color: "#f00" },
                        ]}
                      >
                        {jogador.abates - jogador.mortes}
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
        </>
      ) : (
        <Text>Fail</Text>
      )}
    </ScrollView>
  )
}

export default Match
