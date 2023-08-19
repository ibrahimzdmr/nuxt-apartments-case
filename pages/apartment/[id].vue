<script setup lang="ts">
const { id } = useRoute().params;
const apartmentStore = useApartmentStore();

const apartment = ref();
const loading = useLoadingState();

onMounted(() => {
  loading.value = true;
  if (Array.isArray(id)) {
    return;
  }
  apartment.value = apartmentStore.getApartment(id);
  loading.value = false;
});
</script>
<template>
</template>
