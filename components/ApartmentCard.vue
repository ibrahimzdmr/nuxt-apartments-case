<script setup lang="ts">
import { Apartment } from "~/models/apartment/apartment.interface";

interface ApartmentCardProps {
  apartment: Apartment;
}

const props = defineProps<ApartmentCardProps>();
</script>
<template>
  <SimpleImageCard :image="apartment.photo">
    <template v-slot:header> {{ apartment.address }} </template>
    <template v-slot:body>
      <div>
        <p>Door Number: {{ apartment.doorNumber }}</p>
        <p>Floor: {{ apartment.floor }}</p>
      </div>
    </template>
  </SimpleImageCard>
</template>
