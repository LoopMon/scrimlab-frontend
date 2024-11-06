import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111C26",
    paddingTop: 5,
    paddingBottom: 5,
  },
  search: {
    margin: "auto",
    width: "90%",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontFamily: "KronaOne-Regular",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    height: 150,
    width: "90%",
    maxWidth: 350,
    backgroundColor: "#40202C",
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: "auto",
    padding: 5,
  },
  image: {
    borderWidth: 1,
    borderColor: "#FF4654",
    height: "100%",
    width: "60%",
    borderRadius: 5,
  },
  item: {
    height: "100%",
    width: "38%",
  },
  itemTitle: {
    backgroundColor: "#FF4654",
    paddingVertical: 3,
    borderRadius: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    // fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  itemText: {
    color: "#fff",
    margin: 5,
  },
})

export default styles
