import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#111C26",
    paddingTop: 5,
  },
  image: {
    minWidth: 300,
  },
  titulo: {
    width: "100%",
    fontFamily: "KronaOne-Regular",
    fontSize: 18,
    paddingVertical: 5,
    paddingLeft: 20,
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
  listItem: {
    width: "90%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#40202C",
    borderRadius: 10,
    marginVertical: 10,
  },
  listItemText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "KronaOne-Regular",
  },
})

export default styles
