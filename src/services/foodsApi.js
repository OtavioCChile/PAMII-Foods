import { foodsHttp } from "./api";

export async function listFoods() {
  const { data } = await foodsHttp.get("");
  return data; // array
}

export async function createFood(food) {
  const { data } = await foodsHttp.post("", food);
  return data;
}

export async function deleteFood(id) {
  await foodsHttp.delete(`/${id}`);
}
