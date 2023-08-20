<script setup lang="ts">
import {
  InventoryItem,
  InventoryItemUpdateRequest,
} from "~/models/inventory-item";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";

interface ApartmentInventoryListProps {
  inventoryId: string;
}
const props = defineProps<ApartmentInventoryListProps>();

const getFilteredInventoryItems = () => {
  return inventoryItemStore.state.inventoryItems.filter(
    (i) => i.inventoryId === props.inventoryId
  );
};

const inventoryItemStore = useInventoryItemStore();
const loading = useLoadingState();
const currentItems = ref(getFilteredInventoryItems());
const databaseItems = ref(getFilteredInventoryItems());

const previewDisable = ref(true);

/*const refresh = async () => {
  loading.value = true;
  previewDisable.value = false;
  await inventoryItemStore.fillInventoryItemStore();
  inventoryItems.value = getFilteredInventoryItems();
  loading.value = false;
};*/

const add = (value: InventoryItem) => {
  currentItems.value.push(value);
};

const update = (value: InventoryItemUpdateRequest) => {
  currentItems.value[value.index] = value.inventoryItem;
};

const deleteItem = (value: number) => {
  console.log(value);
  currentItems.value.splice(value, 1);
};
</script>
<template>
  <ApartmentInventoryListItem
    :inventory-id="inventoryId"
    :index="-1"
    @add="add($event)"
  ></ApartmentInventoryListItem>
  <ApartmentInventoryListItem
    v-if="currentItems"
    v-for="(inventoryItem, index) in currentItems"
    :inventory-id="inventoryId"
    :inventory-item="inventoryItem"
    :index="index"
    @delete="deleteItem($event)"
    @update="update($event)"
  ></ApartmentInventoryListItem>
  <SimpleButton
    class="w-full mt-5"
    :color="SimpleButtonColor.Secondary"
    :disabled="previewDisable"
    >Preview</SimpleButton
  >
</template>
