import { Inventory } from "~/models/inventory/inventory.interface";
import { defineStore } from "pinia";

interface InventoryState {
  inventories: Inventory[];
  isLoading: boolean;
}

export const useInventoryStore = defineStore("inventory", () => {
  const state = reactive<InventoryState>({
    inventories: [],
    isLoading: false
  });

  const fillInventoryStore = async () => {
    state.isLoading = true;
    state.inventories = await fetchInventories();
    state.isLoading = false;
  }

  const fetchInventories = async () : Promise<Inventory[]> => {
    const { data, error } = await useFetch<Inventory[]>('/api/inventory');

    if (error.value || !data.value)
      throw createError("Couldn't fetch Inventories");

    return data.value;
  }

  const createInventory = async (apartmentId: string): Promise<Inventory> => {
    const { data, error } = await useFetch<Inventory>('/api/inventory', {
      method: 'POST',
      body: [{ apartmentId: apartmentId } as Inventory]
    });

    if (error.value || !data.value)
      throw createError("Couldn't create a inventory");

    await fillInventoryStore();
    return data.value
  }

  fillInventoryStore();
  return {
    state,
    fetchInventories,
    fillInventoryStore,
    createInventory
  }
});