<script setup lang="ts">
import { InventoryItemEnum } from "~/enums/data/inventoryItem.enum";
import { useInventoryItemStore } from "~/composables/stores/inventory-item.store";
import { useInventoryStore } from "~/composables/stores/inventory.store";
import { SimpleSelectColor } from "~/enums/components/simple-select.enum";

const asd = useInventoryStore();
const asd2 = useInventoryItemStore();
const asd3 = useApartmentStore();
const selectedValue = ref();
const data = ref();

const qweqw = async () => {
  console.log(selectedValue.value);
};

onMounted(() => {
});
</script>
<template>
  <div>
    <button @click="qweqw">qweqweqweqw</button>
    <SimpleSelectBox
      v-if="data"
      :data="data"
      data-key="key"
      data-value="value"
      placeholder="Inventory Item"
      v-model="selectedValue"
      :color="SimpleSelectColor.Info"
    ></SimpleSelectBox>
  </div>
</template>
