import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  keyboardAvoiding: {
    flex: 1,
  },

  container: {
    padding: 22,
    paddingBottom: 40,
  },

  /* ---------- HEADER ---------- */
  header: {
    marginBottom: 30,
    alignItems: "center",
  },

  brand: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  title: {
    fontSize: 22,
    color: "#111827",
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    textAlign: "center",
    width: "90%",
  },

  /* ---------- CARD ---------- */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    marginBottom: 30,
  },

  /* ---------- INPUTS ---------- */
  inputGroup: {
    marginBottom: 18,
  },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  leftIcon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },

  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 6,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  hint: {
    fontSize: 12,
    color: "#6B7280",
  },

  eyeIcon: {
    paddingHorizontal: 4,
  },

  /* ---------- BUTTON ---------- */
  primaryButton: {
    marginTop: 10,
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  primaryButtonDisabled: {
    backgroundColor: "#A5B4FC",
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },

  /* ---------- ERRO ---------- */
  loginError: {
    marginTop: 14,
    color: "#DC2626",
    fontSize: 14,
    textAlign: "center",
  },

  /* ---------- VOLTAR ---------- */
  backToLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  backToLoginText: {
    marginLeft: 6,
    fontSize: 15,
    color: "#111827",
  },

  /* ---------- FOOTER ---------- */
  footerNote: {
    textAlign: "center",
    color: "#9CA3AF",
    marginTop: 20,
    fontSize: 13,
  },
});
