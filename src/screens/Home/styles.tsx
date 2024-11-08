import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111C26",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginVertical: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "justify",
  },
  area: {
    alignSelf: "center",
    alignItems: "center",
    maxWidth: 150,
    borderRadius: 10,
    marginVertical: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF4654",
  },
  especialLabel: {
    fontSize: 26,
    color: "#FF4654",
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
})

export default styles
