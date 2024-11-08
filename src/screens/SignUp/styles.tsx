import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111C26",
    paddingVertical: 10,
  },
  goBack: {
    margin: 10,
  },
  image: {
    maxHeight: 100,
    alignSelf: "center",
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
