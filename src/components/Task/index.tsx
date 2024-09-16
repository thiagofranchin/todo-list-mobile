import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  taskDescription?: string;
  onRemove?: () => void;
};

export function Task({ taskDescription, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.task}>{taskDescription}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
