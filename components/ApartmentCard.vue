<script setup lang="ts">
import { Apartment } from "~/models/apartment/apartment.interface";
import RightArrow from "~/assets/icons/arrow-right-circle.svg"

interface ApartmentCardProps {
  apartment: Apartment;
}

const props = defineProps<ApartmentCardProps>();

const moreInfoClicked = () => {
  navigateTo(`/apartment/${props.apartment.id}`)
}
</script>
<template>
  <SimpleImageCard :image="apartment.photo">
    <template v-slot:header> {{ apartment.address }} </template>
    <template v-slot:body>
      <div>
        <p>Door Number: {{ apartment.doorNumber }}</p>
        <p>Floor: {{ apartment.floor }}</p>
      </div>
      <div>
        <RightArrow class="h-24 w-24 hover:cursor-pointer" @click="moreInfoClicked"/>
      </div>
    </template>
  </SimpleImageCard>
</template>
