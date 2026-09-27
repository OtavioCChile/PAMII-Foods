import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { listFoods, deleteFood } from "../services/foodsApi";
import FoodItem from "../components/FoodItem";

export default function FoodsListScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [foodToDelete, setFoodToDelete] = useState(null);

  async function load() {
    setRefreshing(true);
    try {
      const list = await listFoods();
      setData(list);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar os itens.");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const removeFood = async (id) => {
    try {
      await deleteFood(id);
      setData((prev) => prev.filter((c) => c.id !== id));
      setFoodToDelete(null);
    } catch {
      Alert.alert("Erro", "Falha ao excluir.");
    }
  };

  const handleDelete = (id) => {
    const food = data.find((item) => item.id === id);
    setFoodToDelete(food || { id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodItem food={item} onDelete={handleDelete} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={load}
            colors={["#FA5805"]}
          />
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          !refreshing ? (
            <Text style={styles.emptyText}>Nenhum item cadastrado ainda.</Text>
          ) : null
        }
      />

      {/* Botão Flutuante (FAB) para Adicionar */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("FoodForm")}
        activeOpacity={0.85}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      {/* Modal de Confirmação */}
      <Modal
        visible={!!foodToDelete}
        transparent
        animationType="fade"
        onRequestClose={() => setFoodToDelete(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Confirmar exclusão</Text>
            <Text style={styles.modalMessage}>
              Deseja realmente excluir "{foodToDelete?.name || "este item"}"?
            </Text>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setFoodToDelete(null)}
              >
                <Text style={styles.cancelBtnText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmDeleteBtn}
                onPress={() => removeFood(foodToDelete?.id)}
              >
                <Text style={styles.confirmDeleteText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  listContent: {
    padding: 16,
    paddingBottom: 85,
  },
  emptyText: {
    textAlign: "center",
    color: "#9CA3AF",
    marginTop: 40,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FA5805",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#FA5805",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  fabIcon: {
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 34,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 15,
    color: "#4B5563",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cancelBtnText: {
    color: "#6B7280",
    fontWeight: "600",
  },
  confirmDeleteBtn: {
    backgroundColor: "#DC2626",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  confirmDeleteText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});