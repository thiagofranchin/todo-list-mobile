import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.headerWrapper}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
    </View>
  );
}
