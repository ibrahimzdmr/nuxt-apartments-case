<script setup lang="ts">
import { Apartment } from "~/models/apartment/apartment.interface";

const { id } = useRoute().params;
const apartmentStore = useApartmentStore();

const apartment = ref<Apartment>();
const loading = useLoadingState();

onMounted(async () => {
  loading.value = true;
  if (Array.isArray(id)) {
    return;
  }
  apartment.value = await apartmentStore.getApartment(id);
  loading.value = false;
});
</script>
<template>
  <div v-if="apartment">
    <img :src="apartment.photo" alt="image" />
  </div>
</template>
