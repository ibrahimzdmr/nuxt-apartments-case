import { Apartment } from "~/models/apartment/apartment.interface";
import { defineStore } from "pinia";

interface ApartmentState {
  apartments: Apartment[];
  isLoading: boolean;
}

export const useApartmentStore = defineStore("apartment", () => {
  const state = reactive<ApartmentState>({
    apartments: [],
    isLoading: false
  });

  const fillApartmentStore = async () => {
    state.apartments = await fetchApartments();
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