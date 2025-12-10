// styles.ts
import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  /* SafeAreaView */
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f5f8",
  },

  /* KeyboardAvoidingView */
  keyboardAvoiding: {
    flex: 1,
  },

  /* ScrollView content container */
  container: {
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  /* Header */
  header: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },

  /* Form container (card look) */
  form: {
    width: "100%",
    marginTop: 14,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.85)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
      },
      android: {
        elevation: 6,
      },
    }),
  },

  /* Input group */
  inputGroup: {
    width: "100%",
    marginBottom: 14,
  },

  /* Label */
  labelContainer: {
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "600",
  },

  /* Input */
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(16,24,40,0.06)",
    fontSize: 15,
    color: "#111827",
  },

  /* Password input + icon */
  passwordInputContainer: {
    width: "100%",
    position: "relative",
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
    top: Platform.OS === "ios" ? 12 : 10,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Forgot password */
  forgotPassword: {
    marginTop: 8,
    color: "#6b7280",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  /* Sign-in button */
  signInButton: {
    width: "100%",
    marginTop: 18,
    paddingVertical: 14,
    backgroundColor: "#6366f1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#6366f1",
        shadowOpacity: 0.14,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
      },
      android: {
        elevation: 5,
      },
    }),
  },

  signInButtonDisabled: {
    backgroundColor: "rgba(99,102,241,0.45)",
  },

  signInButtonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },

  /* Error message */
  loginError: {
    marginTop: 12,
    color: "#ef4444",
    fontWeight: "700",
    textAlign: "center",
  },

  /* Register link */
  signUpText: {
    marginTop: 18,
    textAlign: "center",
    color: "#374151",
    fontSize: 14,
  },
  signUpLink: {
    color: "#6366f1",
    fontWeight: "800",
  },
});
