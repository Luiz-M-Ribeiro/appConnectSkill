import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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

export function Profile() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [erroGlobal, setErroGlobal] = useState("");

  const canSubmit =
    nome.trim().length >= 3 &&
    telefone.length >= 10 &&
    cpf.length === 11 &&
    nascimento.length === 8 &&
    !loading;

  const handlePickAvatar = () => {
    Alert.alert("Alterar foto", "Aqui você conecta o seletor de imagens.");
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setErroGlobal("");
      await new Promise((r) => setTimeout(r, 600));

      Alert.alert("Sucesso", "Perfil atualizado.");
    } catch (e: any) {
      setErroGlobal(e?.message || "Falha ao salvar.");
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
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.brand}>Connect Skills</Text>
            <Text style={styles.title}>Seu Perfil</Text>
            <Text style={styles.subtitle}>
              Atualize suas informações pessoais.
            </Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            {/* Avatar */}
            <View style={styles.avatarRow}>
              <View style={styles.avatarContainer}>
                {avatarUri ? (
                  <View style={styles.avatarImageContainer} />
                ) : (
                  <View style={styles.avatarFallback}>
                    <Text style={styles.avatarInitials}>
                      {nome ? nome[0] : "?"}
                    </Text>
                  </View>
                )}

                <TouchableOpacity style={styles.avatarEdit} onPress={handlePickAvatar}>
                  <Ionicons name="camera" size={18} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={styles.avatarHelp}>
                <Text style={styles.avatarTitle}>Foto do perfil</Text>
                <Text style={styles.avatarHint}>
                  Toque no ícone para selecionar uma imagem.
                </Text>
              </View>
            </View>

            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome completo</Text>

              <View
                style={[
                  styles.inputWithIcon,
                  focused === "nome" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  value={nome}
                  placeholder="Seu nome"
                  onFocus={() => setFocused("nome")}
                  onBlur={() => setFocused(null)}
                  onChangeText={setNome}
                />
              </View>
            </View>

            {/* Telefone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Telefone</Text>

              <View
                style={[
                  styles.inputWithIcon,
                  focused === "telefone" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="call-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="(11) 99999-0000"
                  keyboardType="phone-pad"
                  value={telefone}
                  onFocus={() => setFocused("telefone")}
                  onBlur={() => setFocused(null)}
                  onChangeText={setTelefone}
                />
              </View>
            </View>

            {/* CPF */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CPF</Text>

              <View
                style={[
                  styles.inputWithIcon,
                  focused === "cpf" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="id-card-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="000.000.000-00"
                  keyboardType="number-pad"
                  value={cpf}
                  onFocus={() => setFocused("cpf")}
                  onBlur={() => setFocused(null)}
                  onChangeText={setCpf}
                />
              </View>
            </View>

            {/* Nascimento */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Nascimento</Text>
                <Text style={styles.hint}>DD/MM/AAAA</Text>
              </View>

              <View
                style={[
                  styles.inputWithIcon,
                  focused === "nascimento" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="calendar-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="01/01/2000"
                  keyboardType="number-pad"
                  value={nascimento}
                  onFocus={() => setFocused("nascimento")}
                  onBlur={() => setFocused(null)}
                  onChangeText={setNascimento}
                />
              </View>
            </View>

            {/* Botão */}
            <TouchableOpacity
              onPress={handleSave}
              disabled={!canSubmit}
              style={[
                styles.primaryButton,
                !canSubmit && styles.primaryButtonDisabled,
              ]}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.primaryButtonText}>Salvar alterações</Text>
              )}
            </TouchableOpacity>

            {/* Erro */}
            {!!erroGlobal && <Text style={styles.loginError}>{erroGlobal}</Text>}

            {/* Voltar */}
            <TouchableOpacity style={styles.backToLogin} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={16} color="#111827" />
              <Text style={styles.backToLoginText}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerNote}>
            © {new Date().getFullYear()} Connect Skills
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
