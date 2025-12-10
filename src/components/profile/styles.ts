import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f5f8",
  },

  keyboardAvoiding: {
    flex: 1,
  },

  container: {
    padding: 20,
    paddingBottom: 60,
  },

  /* Header */
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  brand: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4f46e5",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 6,
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },

  /* Card principal */
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginTop: 10,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 6,
      },
    }),
  },

  /* Avatar */
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatarContainer: {
    position: "relative",
  },

  avatarFallback: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#6366f1",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInitials: {
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
  },

  avatarEdit: {
    position: "absolute",
    bottom: -4,
    right: -4,
    backgroundColor: "#4f46e5",
    padding: 6,
    borderRadius: 20,
  },

  avatarHelp: {
    marginLeft: 16,
  },

  avatarTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  avatarHint: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },

  /* Inputs */
  inputGroup: {
    marginBottom: 14,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },

  hint: {
    fontSize: 12,
    color: "#6b7280",
  },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(16,24,40,0.1)",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },

  leftIcon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111",
  },

  inputFocused: {
    borderColor: "#6366f1",
  },

  /* Botão */
  primaryButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 14,
    alignItems: "center",
  },

  primaryButtonDisabled: {
    backgroundColor: "rgba(99,102,241,0.4)",
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Erro */
  loginError: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
  },

  /* Voltar */
  backToLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  backToLoginText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#111827",
    fontWeight: "600",
  },

  /* Rodapé */
  footerNote: {
    textAlign: "center",
    marginTop: 30,
    color: "#6b7280",
  },

    avatarImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: "hidden",
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

});
