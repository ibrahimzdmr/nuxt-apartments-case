<script setup lang="ts">
const apartmentStore = useApartmentStore();
const searchState = useSearchState();
const loading = useLoadingState();

const apartments = ref(apartmentStore.state.apartments);
loading.value = true;

watch(searchState, (value) => {
  apartments.value = apartmentStore.state.apartments.filter((i) =>
    i.address.includes(value)
  );
  loading.value = false;
});

onMounted(() => {
  loading.value = false;
});
</script>
<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-wrap" v-if="!loading">
      <div v-for="apartment in apartments">
        <ApartmentCard
          :apartment="apartment"
          class="apartment-card rounded-3xl "
        ></ApartmentCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.apartment-card {
  width: 275px;
  height: 280px;
  @apply m-10;
}
</style>
