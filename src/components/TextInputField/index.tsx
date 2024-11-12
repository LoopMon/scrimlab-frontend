import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

import styles from "./styles"

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
            {esconderSenha ? (
              <Ionicons
                name="eye-off"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            ) : (
              <Ionicons
                name="eye"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            )}
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

export default TextInputField
