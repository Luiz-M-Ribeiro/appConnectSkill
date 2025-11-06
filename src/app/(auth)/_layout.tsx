import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            
            {/* Tela de Login (login.tsx) já é reconhecida automaticamente*/}
            <Stack.Screen name="index" />

            {/* Quando criar outras telas: <Stack.Screen name="register" options={{ title: "Cadastro" }} */}
            <Stack.Screen name="register" />

        </Stack>
    );
}