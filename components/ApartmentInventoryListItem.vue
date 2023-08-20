<script setup lang="ts">
import { SimpleSelectColor } from "~/enums/components/simple-select.enum";
import NumberSelectBox from "./NumberSelectBox.vue";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";
import { InventoryItem, InventoryItemUpdateRequest } from "~/models/inventory-item";
import { useConfirmModalState } from "~/composables/states/confirm-modal.state";

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
const confirmModalState = useConfirmModalState();

if (props.inventoryItem) {
  itemRef.value = props.inventoryItem.itemId;
  quantity.value = props.inventoryItem.quantity;
} else editMode.value = true;



const add = async () => {
  const item = {
    id: "",
    inventoryId: props.inventoryId,
    itemId: itemRef.value,
    quantity: quantity.value,
  } as InventoryItem;
  emit("add", item);
  itemRef.value = "Select";
  quantity.value = "Select";
};

const deleteClicked = () => {
  confirmModalState.value = true;
}

const confirm = () => {
  console.log(props.index)
  emit('delete', props.index);
}

</script>
<template>
  <ConfirmModal text="Do you confirm to remove this item?" @confirm="confirm()"></ConfirmModal>
  <div
    class="grid grid-cols-3 gap-3 mt-5 border-b-2 border-accent p-1 shadow-md"
  >
    <InventoryItemSelectBox
      v-model="itemRef"
      :color="SimpleSelectColor.Accent"
      :disabled="!editMode"
    ></InventoryItemSelectBox>
    <NumberSelectBox
      :from="1"
      :to="20"
      placeholder="Quantity"
      v-model="quantity"
      :color="SimpleSelectColor.Accent"
      :disabled="!editMode"
    ></NumberSelectBox>
    <SimpleButton v-if="index == -1" :color="SimpleButtonColor.Accent" @click="add()"
      >Add</SimpleButton
    >
    <SimpleButton v-if="!editMode" :color="SimpleButtonColor.Accent" @click="editMode = true"
      >Edit</SimpleButton
    >
    <div v-if="editMode && index != -1" class="grid grid-cols-2 gap-2">
      <SimpleButton v-if="editMode" :color="SimpleButtonColor.Accent"
        >Update</SimpleButton
      >
      <SimpleButton v-if="editMode" :color="SimpleButtonColor.Accent" @click="deleteClicked()"
        >Delete</SimpleButton
      >
    </div>
  </div>
</template>
