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

  const getApartment = async (apartmentId: string): Promise<Apartment> => {
    if (!state.apartments) {
      await fillApartmentStore();
    }

    const data = state.apartments.find(i => i.id === apartmentId);

    if (!data) {
      throw createError("Couldn't find Apartment");
    }

    return data;
  }

  fillApartmentStore();
  return {
    state,
    fetchApartments,
    getApartment
  }
});