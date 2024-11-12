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
// Components
import TextInputField from "~/components/TextInputField"
// Images
const ScrimLab = require("~/assets/images/scrimlab.png")
const LeftArrow = require("~/assets/images/left-arrow.png")
// Estilos
import styles from "./styles"
import MyButton from "~/components/MyButton"

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
        style={styles.goBack}
        onPress={() => {
          navigation.navigate("signin")
        }}
      >
        <Image source={LeftArrow} />
      </TouchableOpacity>

      <Image style={styles.image} source={ScrimLab} />

      <View style={styles.form}>
        <Text style={styles.titulo}>{i18n(lang, "signup_title")}:</Text>

        <TextInputField
          label={i18n(lang, "signup_user")}
          value={usuario}
          onChange={(value) => {
            setUsuario(value)
          }}
          placeholder={i18n(lang, "signup_placeholderUser")}
        />

        <TextInputField
          label="E-mail"
          value={email}
          onChange={setEmail}
          placeholder={i18n(lang, "signup_placeholderEmail")}
        />

        <TextInputField
          label={i18n(lang, "password")}
          value={senha}
          onChange={setSenha}
          placeholder={i18n(lang, "signup_placeholderPassword")}
          secureEntry={true}
        />

        <TextInputField
          label={i18n(lang, "signup_cpassword")}
          value={confirmarSenha}
          onChange={setConfirmarSenha}
          placeholder={i18n(lang, "signup_placeholderCPassword")}
          secureEntry={true}
        />

        <Text style={{ color: "#f00" }}>{error}</Text>

        <MyButton
          label={i18n(lang, "signup_submitButton")}
          onPress={cadastrarUsuario}
          disabled={senha !== confirmarSenha}
        />
      </View>
    </ScrollView>
  )
}
export default SignUp
