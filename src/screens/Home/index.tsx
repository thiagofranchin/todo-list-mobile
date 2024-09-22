// Home.tsx
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
  const [taskList, setTaskList] = useState<
    { description: string; completed: boolean }[]
  >([]);
  const [task, setTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function handleTaskAdd() {
    if (taskList.some((t) => t.description === task.trimEnd())) {
      return Alert.alert(
        "Task existente",
        "Já existe uma tarefa na lista com essa descrição!"
      );
    } else if (task.trim() === "") {
      return Alert.alert("Erro!", "O campo não pode estar vazio!");
    }

    setTaskList((prevState) => [
      ...prevState,
      { description: task.trimEnd(), completed: false },
    ]);
    setTask("");
  }

  function handleTaskRemove(taskDescription: string) {
    Alert.alert("Remover", `Deseja remover a tarefa "${taskDescription}"?`, [
      {
        text: "Sim",
        onPress: () => {
          setTaskList((prevState) => {
            const updatedList = prevState.filter(
              (task) => task.description !== taskDescription
            );
            const wasCompleted = prevState.find(
              (task) => task.description === taskDescription
            )?.completed;

            if (wasCompleted) {
              setCompletedTasks((prev) => prev - 1);
            }

            return updatedList;
          });
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  // Função para atualizar o contador de tarefas concluídas
  function handleTaskCompletion(taskDescription: string, isCompleted: boolean) {
    setTaskList((prevState) => {
      return prevState.map((task) =>
        task.description === taskDescription
          ? { ...task, completed: isCompleted }
          : task
      );
    });

    if (isCompleted) {
      setCompletedTasks((prev) => prev + 1);
    } else {
      setCompletedTasks((prev) => prev - 1);
    }
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
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusLabelWrapper}>
            <Text style={styles.labelCriadas}>Criadas</Text>
            <Text style={styles.statusNumber}>{taskList.length}</Text>
          </View>
          <View style={styles.statusLabelWrapper}>
            <Text style={styles.labelConcluidas}>Concluídas</Text>
            <Text style={styles.statusNumber}>{completedTasks}</Text>
          </View>
        </View>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Task
              key={item.description}
              taskDescription={item.description}
              onRemove={() => handleTaskRemove(item.description)}
              onComplete={(isCompleted) =>
                handleTaskCompletion(item.description, isCompleted)
              }
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
