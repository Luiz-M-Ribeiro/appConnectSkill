// ./src/components/register/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
 
export function Register() {
  const router = useRouter();
 
  // 👇 Pré-preenchidos (mantidos do seu exemplo)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showName, setShowName] = useState(false);
 
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
 
  // Mesmo critério que você já usava
  const canSubmit = name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && !loading;
 
  const handleSignIn = async () => {
    try {
      setLoading(true);
      setRegisterError("");
 
   
      await new Promise((r) => setTimeout(r, 600));
 
      if (name.toLowerCase() === "" && email.toLowerCase() === "" && password === "") {
        console.log("registro simulado com sucesso!");
        // Quando quiser, pode redirecionar:
        // router.replace("/(tabs)");
      } else {
        setRegisterError("E-mail ou senha inválidos!");
      }
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>
              Crie sua conta!
            </Text>
          </View>
 
          {/* Formulário */}
          <View style={styles.form}>
            
            {/* Nome */}
            <View style = {styles.inputGroup}>
                <Text style = {styles.label} >Nome</Text>
                <TextInput
                style={styles.input}
                placeholder="Nome do Usuario"
                placeholderTextColor="#9ca3af"
                autoCapitalize="none"
                value={name}
                secureTextEntry={!showName}
                onChangeText={setName}
                  autoCorrect={false}
                />
                <TouchableOpacity
                  
                  style={styles.eyeIcon}

                >

                <Ionicons
                    name={showPassword ? "person-outline" : "person"}
                    size={22}
                    color="#6b7280"
                    />
                    </TouchableOpacity>
                    
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Ionicons
                name={showPassword ? "mail-open-outline" : "mail-open"}
                size={22}
                color="#6b7280"
                />
            </View>
 
            {/* Senha */}
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Senha</Text>
              </View>

              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="******"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>

            {/* Confirmar Senha */}
            <View style = {styles.inputGroup}>
                <View style = {styles.labelContainer}>
                    <Text style = {styles.label}>Confirmar senha</Text>
                </View>
 
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="******"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>
            </View>
 
            {/* Botão de registro */}
            <TouchableOpacity
              onPress={handleSignIn}
              disabled={!canSubmit}
              style={[styles.signInButton, !canSubmit && styles.signInButtonDisabled]}
              accessibilityLabel="Entrar no aplicativo"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Salvar</Text>
              )}
            </TouchableOpacity>
 
            {/* Erro de registro */}
            {!!registerError && <Text style={styles.registerError}>{registerError}</Text>}
 
            {/* Ações secundárias (opcional) */}
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text style={styles.signUpText}>
                Já tem uma conta? <Text style={styles.signUpLink}>Entrar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}