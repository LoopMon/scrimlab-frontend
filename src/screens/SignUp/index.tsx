import { useState } from "react"
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
// Hooks
import useAuth from "~/hooks/useAuth"
import useLanguage from "~/hooks/useLanguage"
// Images
const ScrimLab = require("~/assets/images/scrimlab.png")
const LeftArrow = require("~/assets/images/left-arrow.png")
// Estilos
import styles from "./styles"

function SignUp({ navigation }: any) {
  const { signup }: any = useAuth()
  const { i18n, lang }: any = useLanguage()
  const [usuario, setUsuario] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [error, setError] = useState("")

  const cadastrarUsuario = async () => {
    if (!usuario || !email || !senha || !confirmarSenha) {
      setError(i18n(lang, "signupError_allFields"))
      return
    }

    const resUser = await signup(usuario, email, senha)

    if (resUser) {
      setError(resUser)
      return
    }

    setUsuario("")
    setEmail("")
    setSenha("")
    setConfirmarSenha("")
    setError("")
    navigation.navigate("signin")
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signin")
        }}
      >
        <Image source={LeftArrow} />
      </TouchableOpacity>

      <Image style={styles.image} source={ScrimLab} />

      <View>
        <Text style={styles.titulo}>{i18n(lang, "signup_title")}:</Text>

        <View>
          <Text style={styles.label}>{i18n(lang, "signup_user")}:</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n(lang, "signup_placeholderUser")}
            placeholderTextColor={"#999"}
            value={usuario}
            onChangeText={(value) => {
              setUsuario(value)
            }}
          />
        </View>

        <View>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n(lang, "signup_placeholderEmail")}
            placeholderTextColor={"#999"}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.label}>{i18n(lang, "password")}:</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n(lang, "signup_placeholderPassword")}
            placeholderTextColor={"#999"}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View>
          <Text style={styles.label}>{i18n(lang, "signup_cpassword")}:</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n(lang, "signup_placeholderCPassword")}
            placeholderTextColor={"#999"}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </View>

        <Text style={{ color: "#f00" }}>{error}</Text>

        <TouchableOpacity
          style={
            senha === confirmarSenha
              ? styles.buttonActive
              : styles.buttonDesactive
          }
          disabled={senha !== confirmarSenha}
          onPress={cadastrarUsuario}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            {i18n(lang, "signup_submitButton")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default SignUp
