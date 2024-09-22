import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonTrash: {
    minHeight: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    marginRight: 10,
    maxWidth: "85%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    minHeight: 56,
    flex: 1,
  },
});
