import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";

type Props = {
  taskDescription?: string;
  onRemove?: () => void;
  onComplete?: (isCompleted: boolean) => void;
};

export function Task({ taskDescription, onRemove, onComplete }: Props) {
  const [checkboxState, setCheckboxState] = React.useState(false);

  const handleCheckboxChange = () => {
    const newCheckboxState = !checkboxState;
    setCheckboxState(newCheckboxState);
    if (onComplete) {
      onComplete(newCheckboxState); // Chamando a função ao alterar o estado
    }
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={22}
        fillColor="#1e6F9F"
        text={taskDescription}
        textStyle={{ color: checkboxState ? "#808080" : "#ffffff" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={handleCheckboxChange}
        style={styles.checkbox}
      />

      <TouchableOpacity style={styles.buttonTrash} onPress={onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
