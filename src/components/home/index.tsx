import React, { useRef, useState } from "react";
import { Text, View, Animated, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const mockUsuarios = [
  {
    id: 1,
    nome: "Ana Pereira",
    aprender: "Violão",
    ensinar: "Inglês",
  },
  {
    id: 2,
    nome: "João Silva",
    aprender: "Programação",
    ensinar: "Matemática",
  },
  {
    id: 3,
    nome: "Lucas Andrade",
    aprender: "Espanhol",
    ensinar: "Excel",
  },
];

export function Home() {
  const [usuarios, setUsuarios] = useState(mockUsuarios);
  const position = useRef(new Animated.Value(0)).current;

  const currentUser = usuarios[0];

  const swipe = (direction: "left" | "right") => {
    Animated.timing(position, {
      toValue: direction === "right" ? width : -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      position.setValue(0);
      setUsuarios((prev) => prev.slice(1)); // remove o card atual

      if (direction === "right") {
        alert("🎉 Combinação!");
      } else {
        alert("❌ Rejeitado!");
      }
    });
  };

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sem mais usuários por hoje 👀</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendações para você</Text>

      {/* Card central */}
      <View style={styles.cardList}>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ translateX: position }],
            },
          ]}
        >
          <Text style={styles.userName}>{currentUser.nome}</Text>

          <Text style={styles.infoText}>
            <Text style={styles.bold}>Aprender:</Text> {currentUser.aprender}
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.bold}>Ensinar:</Text> {currentUser.ensinar}
          </Text>
        </Animated.View>
      </View>

      {/* Botões */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.actionButton, styles.noButton]}
          onPress={() => swipe("left")}
        >
          <Ionicons name="close" size={32} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.yesButton]}
          onPress={() => swipe("right")}
        >
          <Ionicons name="heart" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
