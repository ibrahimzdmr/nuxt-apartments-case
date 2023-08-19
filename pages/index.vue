<script setup lang="ts">
const apartmentStore = useApartmentStore();
const searchState = useSearchState();
const loading = useLoadingState();

const apartments = ref(apartmentStore.state.apartments);
loading.value = true;

watch(searchState, value => {
  apartments.value = apartmentStore.state.apartments.filter(i => i.address.includes(value))
  loading.value = false;
})

onMounted(() => {
  loading.value = false;
})

</script>
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    v-if="!loading"
  >
    <div v-for="apartment in apartments">
      <ApartmentCard
        :apartment="apartment"
        class="apartment-card"
      ></ApartmentCard>
    </div>
  </div>
</template>
<style scoped>
.apartment-card {
  width: 275px;
  height: 280px;
  border-radius: 15%;
  @apply m-10;
}
</style>
