/* Stack: container de navegação ( baseado no empilhamento de telas) => push/replace/back.
Router.push("/rota") => empilha uma nova tela por cima da atual => usuario navega para a proxima tela,
 mas ainda deve poder voltar para a anterior.
Router.replace("/rota") => substitua a tela atual (não empilha) => quando você não quer permitir voltar,
 como após o login (após se autenticar!).
Router.back() => remove o topo da pilha (volta um tela) => quando o usuário clica em "voltar." */

import { Slot } from "expo-router";

export default function RootLayout() {

  return  (
    <Slot />
  );
 
}
