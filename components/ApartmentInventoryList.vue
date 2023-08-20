<script setup lang="ts">
interface ApartmentInventoryListProps {
  inventoryId: string;
}
const props = defineProps<ApartmentInventoryListProps>();

</script>
<template>
  <ApartmentInventoryListItem :inventory-id="props.inventoryId"></ApartmentInventoryListItem>
</template>
