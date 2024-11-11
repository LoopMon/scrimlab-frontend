import { Image, ScrollView, Text, View } from "react-native"
import useLanguage from "~/hooks/useLanguage"
import useAuth from "~/hooks/useAuth"

import styles from "./styles"

const JoaoImage = require("~/assets/images/joao-dev.jpeg")
const CassianoImage = require("~/assets/images/cassiano-dev.jpeg")
const AugustoImage = require("~/assets/images/va-dev.jpeg")

function Home({ navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const { user }: any = useAuth()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {i18n(lang, "home_title")} {user.nome}
      </Text>
      <Text style={styles.text}>{i18n(lang, "home_firstParagraph")}</Text>
      <Text style={styles.text}>
        {"\n"}
        {i18n(lang, "home_secondParagraph")}
      </Text>
      <Text style={styles.text}>
        {"\n"}
        {i18n(lang, "home_thirdParagraph")}
      </Text>
      <Text style={styles.text}>
        {"\n"}
        {i18n(lang, "home_fourthParagraph")}
      </Text>

      <Text style={styles.title}>{i18n(lang, "home_developers")}:</Text>
      <View style={styles.area}>
        <Image style={styles.image} source={JoaoImage} />
        <Text style={styles.especialLabel}>Front-End</Text>
        <Text style={styles.label}>João Lucas da Costa</Text>
      </View>
      <View style={styles.area}>
        <Image style={styles.image} source={AugustoImage} />
        <Text style={styles.especialLabel}>Back-End</Text>
        <Text style={styles.label}>Víctor Augusto</Text>
      </View>
      <View style={styles.area}>
        <Image style={styles.image} source={CassianoImage} />
        <Text style={styles.especialLabel}>Back-End</Text>
        <Text style={styles.label}>Victor Cassiano</Text>
      </View>
    </ScrollView>
  )
}

export default Home
