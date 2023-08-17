import { Apartment } from "@prisma/client";
import { defineStore } from "pinia";

export const useApartmentStore = defineStore("apartment", () => {
  const state = ref<Apartment[]>();

  const fillApartmentStore = async () => {
    state.value = await fetchApartments();
  }

  const fetchApartments = async () : Promise<Apartment[]> => {
    const { data, error } = await useFetch<Apartment[]>('/api/apartment');

    if (error.value || !data.value)
      throw createError("Couldn't fetch Apartments");

    return data.value;
  }

  fillApartmentStore();
  return {
    state,
    fetchApartments,
  }
});