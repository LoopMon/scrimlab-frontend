import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111C26",
    paddingVertical: 10,
  },
  image: {
    maxHeight: 100,
  },
  titulo: {
    width: "100%",
    fontFamily: "KronaOne-Regular",
    fontSize: 20,
    paddingVertical: 10,
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    minWidth: 300,
    padding: 15,
    marginVertical: 5,
  },
  buttonActive: {
    width: "90%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#FF4654",
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonDesactive: {
    width: "90%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#999",
    borderRadius: 10,
    marginVertical: 15,
  },
})

export default styles
