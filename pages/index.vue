<script setup lang="ts">
const apartmentStore = useApartmentStore();
</script>
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    v-if="apartmentStore.state.apartments"
  >
    <div v-for="apartment in apartmentStore.state.apartments">
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
