import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111C26",
  },
  image: {
    minWidth: 300,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    width: "90%",
    fontFamily: "KronaOne-Regular",
    fontSize: 30,
    paddingVertical: 5,
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  button: {
    width: "90%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#FF4654",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  buttonGoToSignUp: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
})

export default styles
