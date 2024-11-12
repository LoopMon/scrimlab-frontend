import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111C26",
  },
  form: {
    alignItems: "center",
    paddingVertical: 10,
  },
  formField: {
    width: "100%",
  },
  label: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
    color: "#fff",
    fontSize: 18,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  placar: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  placarImage: {
    width: 50,
    height: 50,
  },
  placarScore: {
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  placarTexto: {
    width: 10,
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  checkboxContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#000",
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderRadius: 3,
    backgroundColor: "#FF4654",
  },
})

export default styles
