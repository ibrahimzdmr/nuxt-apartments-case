<script setup lang="ts">
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";

interface ApartmentInventoryListProps {
  apartmentId: string;
}

const props = defineProps<ApartmentInventoryListProps>();

const inventoryStore = useInventoryStore();
const loading = useLoadingState();

const isInventoryExists = ref(false);

const createInventory = async () => {
  loading.value = true;
  await inventoryStore.createInventory(props.apartmentId);
  loading.value = false;
  inventoryControl();
};

const inventoryControl = () => {
  const inventory = inventoryStore.state.inventories.find(
    (item) => item.apartmentId === props.apartmentId
  );
  if (inventory) {
    isInventoryExists.value = true;
  }
};

onMounted(() => {
  inventoryControl();
});
</script>
<template>
  <SimpleButton
    class="w-full mt-5"
    :color="SimpleButtonColor.Accent"
    v-if="!isInventoryExists"
    @click="createInventory"
    >Create Inventory</SimpleButton
  >
</template>
