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
  dev: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 400,
    borderRadius: 15,
    backgroundColor: "#333",
    marginHorizontal: "auto",
    marginVertical: 15,
    padding: 5,
    gap: 10,
  },
  devImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF4654",
  },
  devInfo: {
    gap: 5,
  },
  especialLabel: {
    fontSize: 26,
    color: "#FF4654",
  },
  devStack: {
    flexDirection: "row",
    gap: 15,
  },
  label: {
    color: "#fff",
    fontSize: 18,
  },
  especialBar: {
    alignSelf: "flex-end",
    width: 20,
    height: "100%",
    backgroundColor: "red",
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
})

export default styles
