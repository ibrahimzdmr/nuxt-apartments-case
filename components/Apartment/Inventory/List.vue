<script setup lang="ts">
import {
  InventoryItem,
  InventoryItemUpdateRequest,
} from "~/models/inventory-item";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";
import { inventoryItemValidationSchema } from "~/validations/inventory-item.validation";
import zod from "zod";

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
const databaseItems = ref(
  JSON.parse(JSON.stringify(getFilteredInventoryItems()))
);
const error = reactive({
  visibility: false,
  text: "",
});
const previewDisable = ref(true);
const previewShow = ref(false);

const add = async (value: InventoryItem) => {
  loading.value = true;
  const currentItem = currentItems.value.find((i) => i.itemId == value.itemId);
  if (!currentItem) currentItems.value.push(value);
  else {
    try {
      currentItem.quantity += parseInt(value.quantity.toString());
      inventoryItemValidationSchema.parse(currentItem);
    } catch (err: any) {
      if (err instanceof zod.ZodError) {
        error.visibility = true;
        error.text = err.issues[0].message;
      }
      currentItem.quantity -= value.quantity;
    }
  }
  previewDisable.value = false;
  loading.value = false;
};

const update = (value: InventoryItemUpdateRequest) => {
  loading.value = true;
  const index = value.index;
  currentItems.value[index] = value.inventoryItem;
  previewDisable.value = false;
  loading.value = false;
};

const deleteItem = (value: number) => {
  loading.value = true;
  currentItems.value.splice(value, 1);
  previewDisable.value = false;
  loading.value = false;
};

const preview = () => {
  previewShow.value = true;
};

const saved = () => {
  databaseItems.value = JSON.parse(JSON.stringify(currentItems.value));
  previewDisable.value = true;
};
</script>
<template>
    <Transition mode="out-in">
      <MessageError
        :show="error.visibility"
        :ms="5000"
        @hidden="() => (error.visibility = false)"
        :text="error.text"
        class="mt-5"
      ></MessageError>
    </Transition>
    <p class="m-2 mt-5 text-secondary text-xl flex font-bold pl-3">New Item</p>
    <ApartmentInventoryListItem
      :inventory-id="inventoryId"
      :index="-1"
      @add="add($event)"
    ></ApartmentInventoryListItem>
    <p class="m-2 mt-5 text-secondary text-xl flex font-bold pl-3">
      Current Items
    </p>
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
      @click="preview"
      >Preview</SimpleButton
    >
    <ApartmentInventoryPreviewModal
      v-if="previewShow"
      :current-items="currentItems"
      :database-items="databaseItems"
      :show="previewShow"
      @closed="() => (previewShow = false)"
      @saved="saved()"
    ></ApartmentInventoryPreviewModal>
</template>
