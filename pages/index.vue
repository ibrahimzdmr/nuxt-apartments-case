<script setup lang="ts">
import SimpleEnumSelectBox from "~/components/SimpleEnumSelectBox.vue";
import { InventoryItemEnum } from "~/enums/data/inventoryItem.enum";
import { useInventoryItemStore } from "~/composables/stores/inventory-item.store";
import { useInventoryStore } from "~/composables/stores/inventory.store";
import { KeyValue } from "~/models/common/key-value.interface";

const asd = useInventoryStore();
const asd2 = useInventoryItemStore();
const asd3 = useApartmentStore();
const selectedValue = ref();
const data = ref();

const qweqw = async () => {
  console.log(selectedValue.value);
};

onMounted(() => {
  const z = InventoryItemEnum;
  data.value = Object.entries(z)
    .filter(([key, value]) => typeof value === "number")
    .map(([value, key]) => {
      return {
        key,
        value,
      } as KeyValue;
    });
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
    ></SimpleSelectBox>
  </div>
</template>
