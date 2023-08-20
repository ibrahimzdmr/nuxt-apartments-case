import { InventoryItem } from "~/models/inventory-item/inventory-item.interface";
import { defineStore } from "pinia";

interface InventoryItemState {
  inventoryItems: InventoryItem[];
  isLoading: boolean;
}

export const useInventoryItemStore = defineStore("inventoryItem", () => {
  const state = reactive<InventoryItemState>({
    inventoryItems: [],
    isLoading: false
  });

  const fillInventoryItemStore = async () => {
    state.isLoading = true;
    state.inventoryItems = await fetchInventoryItems();
    state.isLoading = false;
  }

  const fetchInventoryItems = async () : Promise<InventoryItem[]> => {
    const { data, error } = await useFetch<InventoryItem[]>('/api/inventory-item');

    if (error.value || !data.value)
      throw createError("Couldn't fetch Inventory Items");

    return data.value;
  }

  fillInventoryItemStore();
  return {
    state,
    fetchInventoryItems,
    fillInventoryItemStore
  }
});