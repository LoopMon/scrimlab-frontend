import { Image, ScrollView, Text, View } from "react-native"
import useLanguage from "~/hooks/useLanguage"
import useAuth from "~/hooks/useAuth"

import styles from "./styles"

const JoaoImage = require("~/assets/images/joao-dev.jpeg")
const CassianoImage = require("~/assets/images/cassiano-dev.jpeg")
const AugustoImage = require("~/assets/images/va-dev.jpeg")

const ts = require("~/assets/images/front-icons/ts.png")
const react = require("~/assets/images/front-icons/react.png")
const expo = require("~/assets/images/front-icons/expo.png")
const js = require("~/assets/images/back-icons/js.png")
const node = require("~/assets/images/back-icons/node.png")
const mongodb = require("~/assets/images/back-icons/mongodb.png")

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

      <View style={styles.dev}>
        <Image style={styles.devImage} source={JoaoImage} />
        <View style={styles.devInfo}>
          <Text style={styles.especialLabel}>Front-End</Text>
          <View style={styles.devStack}>
            <Image source={ts} />
            <Image source={react} />
            <Image source={expo} />
          </View>
          <Text style={styles.label}>João Lucas</Text>
        </View>
        <View style={styles.especialBar}></View>
      </View>

      <View style={styles.dev}>
        <Image style={styles.devImage} source={AugustoImage} />
        <View style={styles.devInfo}>
          <Text style={styles.especialLabel}>Back-End</Text>
          <View style={styles.devStack}>
            <Image source={js} />
            <Image source={node} />
            <Image source={mongodb} />
          </View>
          <Text style={styles.label}>Víctor Augusto</Text>
        </View>
        <View style={styles.especialBar}></View>
      </View>

      <View style={styles.dev}>
        <Image style={styles.devImage} source={CassianoImage} />
        <View style={styles.devInfo}>
          <Text style={styles.especialLabel}>Back-End</Text>
          <View style={styles.devStack}>
            <Image source={js} />
            <Image source={node} />
            <Image source={mongodb} />
          </View>
          <Text style={styles.label}>Victor Cassiano</Text>
        </View>
        <View style={styles.especialBar}></View>
      </View>
    </ScrollView>
  )
}

export default Home
