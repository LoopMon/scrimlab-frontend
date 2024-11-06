import { Image, Text, View, FlatList, TouchableOpacity } from "react-native"
import useLanguage from "~/hooks/useLanguage"

import styles from "./styles"

const ScrimLab = require("~/assets/images/scrimlab-logo.png")

function Config() {
  const { i18n, lang, setLang }: any = useLanguage()
  const langList = [
    {
      name: "es",
      key: "config_es",
    },
    {
      name: "en",
      key: "config_en",
    },
    {
      name: "pt_br",
      key: "config_ptBr",
    },
  ]

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ScrimLab} />

      <Text style={styles.titulo}>{i18n(lang, "config_title")}:</Text>

      <View>
        <FlatList
          data={langList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                setLang(item.name)
              }}
            >
              <Text style={styles.listItemText}>{i18n(lang, item.key)}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  )
}

export default Config
