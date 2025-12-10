import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  /* Centraliza o card */
  cardList: {
    alignItems: "center",
    justifyContent: "center",
  },

  /* Card com tamanho proporcional à tela */
  card: {
    width: width * 0.78,          // 78% da tela
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
    textAlign: "center",
  },

  infoText: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 6,
    textAlign: "center",
  },

  bold: {
    fontWeight: "700",
    color: "#111827",
  },

  /* Botões */
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    gap: 40,
  },

  actionButton: {
    width: 65,
    height: 65,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  noButton: {
    backgroundColor: "#EF4444",
  },

  yesButton: {
    backgroundColor: "#10B981",
  },
});
