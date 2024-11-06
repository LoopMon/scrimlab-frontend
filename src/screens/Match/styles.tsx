import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#111C26",
    paddingVertical: 10,
  },
  mapa: {
    height: 150,
    width: "90%",
    maxWidth: 450,
    borderWidth: 2,
    borderColor: "#FF4654",
    borderRadius: 10,
    margin: "auto",
  },
  painel: {
    height: 100,
    width: "90%",
    maxWidth: 450,
    padding: 10,
    backgroundColor: "#40202C",
    borderRadius: 10,
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: "auto",
  },
  painelTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  painelCamp: {
    fontWeight: 600,
    color: "#fff",
  },
  painelData: {
    color: "#fff",
  },
  times: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  time: {
    flexWrap: "wrap",
    textAlign: "center",
    color: "#fff",
    width: 50,
  },
  score: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
  },
  statusJogadores: {
    width: "90%",
    maxWidth: 700,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40202C",
    borderRadius: 10,
    gap: 5,
    padding: 10,
    margin: "auto",
  },
  tab: {
    gap: 5,
    width: "45%",
  },
  tabTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jogador: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jogadorStatus: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8C3243",
    borderRadius: 5,
    padding: 5,
  },
  tabStatus: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  tabText: {
    color: "#fff",
    fontSize: 12,
  },
  linha: {
    height: "100%",
    width: 2,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
})

export default styles
