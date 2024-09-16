import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { styles } from "./styles";

import { Task } from "../../components/Task";
import Header from "../../components/Header";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [taskList, setTaskList] = useState<string[]>([]);
  const [task, setTask] = useState("");

  function handleTaskAdd() {
    if (taskList.includes(task.trimEnd())) {
      return Alert.alert(
        "Task existente",
        "Já existe uma tarefa na lista com essa descrição!"
      );
    } else if (task.trim() == "") {
      return Alert.alert("Erro!", "O campo não pode estar vazio!");
    }
    console.log("Vc clicou no botao Adicionar");

    setTaskList((prevState) => [...prevState, task.trimEnd()]);
    setTask("");
  }

  function handleTaskRemove(taskDescription: string) {
    Alert.alert(
      "Remover",
      `Deseja remover o participante ${taskDescription}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTaskList((prevState) =>
              prevState.filter((task) => task !== taskDescription)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
    console.log(`Vc clicou no botao Remover a task ${taskDescription}`);
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isFocused ? styles.inputFocused : null]}
            placeholder="Descrição da tarefa"
            placeholderTextColor="#6b6b6b"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={setTask}
            value={task}
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd()}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusLabelWrapper}>
            <Text style={styles.labelCriadas}>Criadas</Text>
            <Text style={styles.statusNumber}>0</Text>
          </View>
          <View style={styles.statusLabelWrapper}>
            <Text style={styles.labelConcluidas}>Concluídas</Text>
            <Text style={styles.statusNumber}>0</Text>
          </View>
        </View>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              taskDescription={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListWrapper}>
              <Image
                source={require("../../../assets/clipboard.png")}
                style={styles.emptyListImage}
              />
              <Text style={styles.emptyListTextTop}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListTextBottom}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
