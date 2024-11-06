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
  titulo: {
    width: "100%",
    fontFamily: "KronaOne-Regular",
    fontSize: 30,
    paddingVertical: 5,
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  inputEmail: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    minWidth: 300,
    marginVertical: 5,
    padding: 15,
  },
  inputPassword: {
    width: "90%",
    minWidth: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    padding: 5,
  },
  input: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: "90%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#FF4654",
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default styles
