<script setup lang="ts">
import { Apartment } from "~/models/apartment/apartment.interface";

const { id } = useRoute().params;
const apartmentStore = useApartmentStore();
const inventoryStore = useInventoryStore();

const apartment = ref<Apartment>();
const loading = useLoadingState();

const searchShow = useSearchShowState();

onMounted(async () => {
  loading.value = true;
  if (Array.isArray(id)) {
    return;
  }
  apartment.value = await apartmentStore.getApartment(id);
  loading.value = false;
  searchShow.value = false;
});

onUnmounted(() => {
  searchShow.value = true;
});
</script>
<template>
  <div class="flex items-center justify-center mt-5">
    <div v-if="apartment" class="md:w-5/12 sm:w-full">
      <img :src="apartment.photo" alt="image" class="" />
      <ApartmentInventoryPanel :apartment-id="apartment.id"></ApartmentInventoryPanel>
    </div>
  </div>
</template>
