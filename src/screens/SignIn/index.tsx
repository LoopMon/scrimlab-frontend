import { useState } from "react"
import {
  SafeAreaView,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Services
import api from "~/services/api"
// Estilos
import styles from "./styles"

// Imagens
const ScrimLab = require("~/assets/images/scrimlab-logo.png")
const Eye = require("~/assets/images/eye.png")
const EyeClosed = require("~/assets/images/eye-closed.png")

function SignIn({ navigation }: any) {
  const { i18n, lang }: any = useLanguage()
  const { signin }: any = useAuth()
  const [email, setEmail] = useState("victor@email")
  const [senha, setSenha] = useState("1")
  const [esconderSenha, setEsconderSenha] = useState(true)
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

      <View>
        <Text style={styles.titulo}>{i18n(lang, "signin_title")}:</Text>
        <View>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder={i18n(lang, "signin_placeholderEmail")}
            placeholderTextColor={"#999"}
            value={email}
            onChangeText={(value) => [setEmail(value), setError("")]}
          />
        </View>

        <View>
          <Text style={styles.label}>{i18n(lang, "password")}:</Text>
          <View style={styles.inputPassword}>
            <TextInput
              secureTextEntry={esconderSenha}
              style={styles.input}
              placeholder={i18n(lang, "signin_placeholderPassword")}
              placeholderTextColor={"#999"}
              value={senha}
              onChangeText={(value) => [setSenha(value), setError("")]}
            />
            <TouchableOpacity
              onPress={() => {
                setEsconderSenha(!esconderSenha)
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={esconderSenha ? Eye : EyeClosed}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ color: "#f00" }}>{error}</Text>

        <TouchableOpacity style={styles.button} onPress={fazerLogin}>
          <Text style={styles.buttonText}>
            {i18n(lang, "signin_submitButton")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* SignUp */}
      <Text style={{ color: "#fff", textAlign: "center" }}>
        {i18n(lang, "signin_dhacc")}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup")
          }}
        >
          <Text style={{ color: "#FF4654" }}>
            {" "}
            {i18n(lang, "signin_signup")}
          </Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  )
}

export default SignIn
