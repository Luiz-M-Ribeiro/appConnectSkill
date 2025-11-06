/* Configuração do react natibe com o objetivo de que os dados de login
persistam mesmo após fechar o app => persistencia da sessão no AsyncStorage */

import { SUPA_KEY, SUPA_URL } from "@/constants/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(SUPA_URL, SUPA_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});