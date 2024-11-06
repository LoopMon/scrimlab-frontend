import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    width: "100%",
    backgroundColor: "#111C26",
    padding: 10,
  },
  team: {
    backgroundColor: "#40202C",
    borderRadius: 10,
    width: 300,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
})

export default styles
