import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 24,
  },
  form: {
    flexDirection: "row",
    marginTop: -50,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#ffffff",
    height: 54,
    padding: 16,
    marginRight: 8,
    marginBottom: 32,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  inputFocused: {
    borderColor: "#5E60CE",
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ffffff",
    width: 18,
    height: 18,
    paddingLeft: 6,
    fontSize: 12,
  },
  taskList: {
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  emptyListWrapper: {
    padding: 48,
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  emptyListImage: {
    marginBottom: 16,
  },
  emptyListTextTop: {
    color: "#808080",
    fontWeight: "bold",
  },
  emptyListTextBottom: {
    color: "#808080",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusLabelWrapper: {
    flexDirection: "row",
  },
  statusNumber: {
    color: "#ffffff",
    paddingLeft: 10,
    paddingVertical: 2,
    backgroundColor: "#333333",
    borderRadius: 50,
    height: 19,
    width: 25,
    fontSize: 11,
    fontWeight: "bold",
  },
  labelCriadas: {
    color: "#4EA8DE",
    fontWeight: "bold",
    marginRight: 8,
  },
  labelConcluidas: {
    color: "#8284FA",
    fontWeight: "bold",
    marginRight: 8,
  },
});
