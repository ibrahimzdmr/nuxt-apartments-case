<script setup lang="ts">
interface ApartmentInventoryListProps {
  inventoryId: string;
}
const props = defineProps<ApartmentInventoryListProps>();

const inventoryItemStore = useInventoryItemStore();
const muzaffer = ref(
  inventoryItemStore.state.inventoryItems.filter(
    (i) => i.inventoryId === props.inventoryId
  )
);
</script>
<template>
  <ApartmentInventoryListItem
    :inventory-id="props.inventoryId"
  ></ApartmentInventoryListItem>
  <ApartmentInventoryListItem
    v-if="muzaffer"
    v-for="inventoryItem in muzaffer"
    :inventory-id="props.inventoryId"
    :inventory-item="inventoryItem"
  ></ApartmentInventoryListItem>
</template>
