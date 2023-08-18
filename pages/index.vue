<script setup lang="ts">
import { useInventoryItemStore } from "~/composables/stores/inventory-item.store";
import { useInventoryStore } from "~/composables/stores/inventory.store";

const asd = useInventoryStore();
const asd2 = useInventoryItemStore();
const asd3 = useApartmentStore();
const selectedValue = ref();

const qweqw = async () => {
  /*const z = {
        address: 'Address34',
        doorNumber: 'DoorNumber34',
        floor: 'Floor34',
        id: 'cllffx8qa0000bhxosz3vye7x'
    } as Apartment
    const { data, error } = await useFetch('api/apartment', {
        method: 'PUT',
        body: z
    });
    console.log(error);*/
  console.log(selectedValue.value)
  console.log(asd2.state.inventoryItems.filter(i => i.itemId == ))
};
</script>
<template>
  <div>
    <button @click="qweqw">qweqweqweqw</button>
    <SimpleSelectBox
      :data="asd2.state.inventoryItems"
      data-key="itemId"
      data-value="address"
      placeholder="addresses"
      v-model="selectedValue"
    ></SimpleSelectBox>
  </div>
</template>
