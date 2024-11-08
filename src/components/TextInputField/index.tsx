import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import styles from "./styles"

const Eye = require("~/assets/images/eye.png")
const EyeClosed = require("~/assets/images/eye-closed.png")

interface Fields {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  placeholderColor?: string
  secureEntry?: boolean
}

function TextInputField({
  label,
  value,
  onChange,
  placeholder,
  placeholderColor = "#999",
  secureEntry = false,
}: Fields) {
  const [esconderSenha, setEsconderSenha] = useState(secureEntry)

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}:</Text>

      <View style={styles.inputView}>
        <TextInput
          style={secureEntry ? styles.inputSecure : styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          value={value}
          onChangeText={onChange}
          secureTextEntry={esconderSenha}
        />
        {secureEntry ? (
          <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={esconderSenha ? EyeClosed : Eye}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

export default TextInputField
