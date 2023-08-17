import { Apartment } from "@prisma/client";
import { Inventory } from "~/models/inventory/inventory.interface";
import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", () => {
  const state = ref<Inventory[]>();

  const fillInventoryStore = async () => {
    state.value = await fetchInventories();
  }

  const fetchInventories = async () : Promise<Inventory[]> => {
    const { data, error } = await useFetch<Inventory[]>('/api/apartment');

    if (error.value || !data.value)
      throw createError("Couldn't fetch Inventories");

    return data.value;
  }

  fillInventoryStore();
  return {
    state,
    fetchInventories,
  }
});