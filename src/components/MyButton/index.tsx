import { Text, TouchableOpacity } from "react-native"

import styles from "./styles"

interface MyButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
}

function MyButton({ label, onPress, disabled = false }: MyButtonProps) {
  return (
    <TouchableOpacity
      style={disabled ? styles.buttonOff : styles.buttonOn}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
