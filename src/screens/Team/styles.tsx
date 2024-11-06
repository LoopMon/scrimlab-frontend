import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#111C26",
    padding: 10,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    width: "80%",
    maxWidth: 450,
    height: 130,
    backgroundColor: "#40202C",
    borderRadius: 10,
    padding: 5,
    marginBottom: 30,
  },
  timeLogo: {
    width: 100,
    height: 100,
  },
  timeDesc: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  jogadores: {
    backgroundColor: "#40202C",
    width: "80%",
    maxWidth: 450,
    padding: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  jogador: {
    width: 130,
    height: 70,
    backgroundColor: "#BF3B53",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  jogadorImg: {
    width: 50,
    height: 50,
  },
})

export default styles
