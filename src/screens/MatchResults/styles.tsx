import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#111C26",
  },
  search: {
    marginVertical: 10,
    marginHorizontal: "auto",
    width: "90%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
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
    marginVertical: 10,
    marginHorizontal: "auto",
    padding: 10,
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
    fontSize: 16,
    // fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  itemText: {
    color: "#fff",
    margin: 3,
  },
  label: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
})

export default styles
