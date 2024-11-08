import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  field: {
    width: "90%",
    minWidth: 300,
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff",
  },
  inputView: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  inputSecure: {
    width: "85%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
})

export default styles
