import { useState } from "react"
import { SafeAreaView, Image, Text, View, TouchableOpacity } from "react-native"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Components
import TextInputField from "~/components/TextInputField"
import MyButton from "~/components/MyButton"
// Services
import api from "~/services/api"
// Estilos
import styles from "./styles"

// Imagens
const ScrimLab = require("~/assets/images/scrimlab-logo.png")

function SignIn({ navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const { signin }: any = useAuth()
  const [email, setEmail] = useState("lucas@email")
  const [senha, setSenha] = useState("123")
  const [error, setError] = useState("")

  const fazerLogin = async () => {
    if (!email || !senha) {
      setError(i18n(lang, "signinError_allFields"))
      return
    }

    const res = await signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    setEmail("")
    setSenha("")
    setError("")
    navigation.navigate("home")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={ScrimLab} />

      <View style={styles.form}>
        <Text style={styles.titulo}>{i18n(lang, "signin_title")}:</Text>

        <TextInputField
          label="E-mail"
          value={email}
          onChange={(value: string) => {
            setEmail(value)
            setError("")
          }}
          placeholder={i18n(lang, "signin_placeholderEmail")}
        />

        <TextInputField
          label={i18n(lang, "password")}
          value={senha}
          onChange={(value: string) => [setSenha(value), setError("")]}
          placeholder={i18n(lang, "signin_placeholderPassword")}
          secureEntry={true}
        />

        <Text style={{ color: "#f00" }}>{error}</Text>

        <MyButton
          label={i18n(lang, "signin_submitButton")}
          onPress={fazerLogin}
        />
      </View>

      {/* Navigate to SignUp */}
      <View style={styles.buttonGoToSignUp}>
        <Text style={{ color: "#fff" }}>{i18n(lang, "signin_dhacc")}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup")
          }}
        >
          <Text style={{ color: "#FF4654" }}>
            {i18n(lang, "signin_signup")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
