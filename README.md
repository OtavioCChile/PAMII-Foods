# Food Manager - Aplicativo Móvel

Aplicativo desenvolvido em **React Native** com **Expo** para listagem e cadastro de comidas (itens de cardápio).

---

## 📌 Origem e Créditos

Este projeto foi desenvolvido como parte de uma atividade prática na disciplina de **Desenvolvimento para Aplicativos Móveis II** na UNIARA.

O projeto tem como base a arquitetura e a proposta inicial de um repositório criado pelo professor André Luiz da Silva, tendo sido adaptado e refatorado para o contexto de gerenciamento de comidas (*foods*).

---

## 🚀 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** & **[Expo](https://expo.dev/)**
- **[React Navigation](https://reactnavigation.org/)** (Stack Navigator)
- **[Axios](https://axios-http.com/)** para consumo de APIs HTTP
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** para persistência de sessão local
- **[ReqRes API](https://reqres.in/)** para simulação de autenticação
- **[MockAPI](https://mockapi.io/)** para persistência e operações de CRUD

---

## 🛠️ Como Executar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npx expo start
   ```

3. **Para abrir no navegador (Web):**
   ```bash
   npm run web
   ```
   *Ou leia o QR Code gerado pelo terminal através do app **Expo Go** no seu celular Android ou iOS.*

---

## 🔑 Credenciais para Acesso (ReqRes)

Para efetuar login e acessar a aplicação, utilize as credenciais padrão de teste:

- **E-mail:** `eve.holt@reqres.in`
- **Senha:** `cityslicka`

---

## 📄 Funcionalidades

- Autenticação e persistência de sessão via Context API e AsyncStorage.
- Listagem de comidas cadastradas com atualização via *Pull to Refresh*.
- Cadastro de novos itens com envio para o MockAPI.
- Confirmação e exclusão de itens com feedback visual.
