<script setup lang="ts">
import { SimpleSelectColor } from "~/enums/components/simple-select.enum";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";
import {
  InventoryItem,
  InventoryItemUpdateRequest,
} from "~/models/inventory-item";

interface ApartmentInventoryListItemProps {
  inventoryId: string;
  inventoryItem?: InventoryItem;
  index: number;
}

const props = defineProps<ApartmentInventoryListItemProps>();

const emit = defineEmits<{
  (event: "add", value: InventoryItem): void;
  (event: "update", value: InventoryItemUpdateRequest): void;
  (event: "delete", value: number): void;
}>();

const itemRef = ref();
const quantity = ref();
const editMode = ref(false);

if (props.inventoryItem) {
  itemRef.value = props.inventoryItem.itemId;
  quantity.value = props.inventoryItem.quantity;
} else editMode.value = true;

const add = async () => {
  const item = {
    id: "",
    inventoryId: props.inventoryId,
    itemId: parseInt(itemRef.value),
    quantity: parseInt(quantity.value),
  } as InventoryItem;
  emit("add", item);
  itemRef.value = undefined;
  quantity.value = undefined;
};

const deleteClicked = () => {
  emit('delete', props.index);
  editMode.value = false;
};

const update = async () => {
  const item = {
    id: props.inventoryItem?.id,
    inventoryId: props.inventoryItem?.inventoryId,
    itemId: parseInt(itemRef.value),
    quantity: parseInt(quantity.value),
  } as InventoryItem;

  const updateRequest = {
    inventoryItem: item,
    index: props.index
  } as InventoryItemUpdateRequest;

  emit("update", updateRequest);
  editMode.value = false;
};

watch(() => props.inventoryItem?.quantity, value => {
  quantity.value = value;
})

watch(() => props.inventoryItem?.itemId, value => {
  itemRef.value = value;
})
</script>
<template>
  <div
    class="grid grid-cols-3 gap-3 mt-5 shadow rounded-lg p-3"
  >
    <ApartmentInventoryItemSelectBox
      v-model="itemRef"
      :color="SimpleSelectColor.Accent"
      :disabled="!editMode"
    ></ApartmentInventoryItemSelectBox>
    <CommonNumberSelectBox
      :from="1"
      :to="20"
      placeholder="Quantity"
      v-model="quantity"
      :color="SimpleSelectColor.Accent"
      :disabled="!editMode"
    ></CommonNumberSelectBox>
    <SimpleButton
      v-if="index == -1"
      :color="SimpleButtonColor.Accent"
      @click="add()"
      >Add</SimpleButton
    >
    <SimpleButton
      v-if="!editMode"
      :color="SimpleButtonColor.Accent"
      @click="editMode = true"
      >Edit</SimpleButton
    >
    <div v-if="editMode && index != -1" class="grid grid-cols-2 gap-2">
      <SimpleButton
        v-if="editMode"
        :color="SimpleButtonColor.Accent"
        @click="update()"
        >Update</SimpleButton
      >
      <SimpleButton
        v-if="editMode"
        :color="SimpleButtonColor.Accent"
        @click="deleteClicked()"
        >Delete</SimpleButton
      >
    </div>
  </div>
</template>
