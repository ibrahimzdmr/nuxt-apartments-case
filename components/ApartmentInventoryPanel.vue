<script setup lang="ts">
import { useSuccessMessageState } from "~/composables/states/success-message.state";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";

interface ApartmentInventoryPanelProps {
  apartmentId: string;
}

const props = defineProps<ApartmentInventoryPanelProps>();

const inventoryStore = useInventoryStore();
const loading = useLoadingState();

const inventoryId = ref();

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
    inventoryId.value = inventory.id;
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
    v-if="!inventoryId"
    @click="createInventory"
    >Create Inventory</SimpleButton
  >
  <ApartmentInventoryList
    v-if="inventoryId"
    :inventory-id="inventoryId"
  ></ApartmentInventoryList>
</template>
