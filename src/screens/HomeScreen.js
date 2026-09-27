import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export default function HomeScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo! 👋</Text>
        <Text style={styles.subtitle}>Gerenciamento de Itens</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("FoodsList")}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Ver Lista de Comidas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("FoodForm")}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>+ Cadastrar Novo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={signOut}
        activeOpacity={0.7}
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: "#F8F9FA",
  },
  header: {
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
  buttonGroup: {
    gap: 16,
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#FA5805",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#FA5805",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#FA5805",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#FA5805",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButtonText: {
    color: "#DC2626",
    fontSize: 15,
    fontWeight: "600",
  },
});