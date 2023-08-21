<script setup lang="ts">
import { InventoryItem } from "~/models/inventory-item";
import { SimpleButtonColor } from "~/enums/components/simple-button.enum";
import { InventoryItemEnum } from "~/enums/data/inventoryItem.enum";

interface PreviewModalProps {
  show: boolean;
  currentItems: InventoryItem[];
  databaseItems: InventoryItem[];
}

const props = defineProps<PreviewModalProps>();

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const visibility = ref(true);
const addedItems = ref();
const deletedItems = ref();
const loadingState = useLoadingState();
const successState = useSuccessMessageState();

const save = async () => {
  close();
  loadingState.value = true;
  await sendDeleteItemRequest();
  await sendInsertItemRequest();
  await sendUpdateItemRequest();
  loadingState.value = false;
  successState.value = true;
};

const close = () => {
  visibility.value = false;
  emit('closed');
};

const delta = () => {
  //Added Items
  addedItems.value = props.currentItems.filter((i) => i.id == "");

  //Deleted Items
  const deletedItemTemp: InventoryItem[] = [];
  props.databaseItems.forEach((item) => {
    const index = props.currentItems.findIndex((i) => i.id == item.id);
    if (index == -1) {
      deletedItemTemp.push(item);
    }
  });

  //Updated Items
  props.currentItems
    .filter((i) => i.id != "")
    .forEach((item) => {
      const databaseItem = props.databaseItems.find((i) => i.id == item.id);
      if (databaseItem) {
        const diff = item.quantity - databaseItem.quantity;
        const isItemChanged = item.itemId != databaseItem.itemId;
        if (isItemChanged) {
          addedItems.value.push({
                id: item.id,
                inventoryId: item.inventoryId,
                itemId: item.itemId,
                quantity: item.quantity,
              } as InventoryItem);
          deletedItemTemp.push({
                id: databaseItem.id,
                inventoryId: databaseItem.inventoryId,
                itemId: databaseItem.itemId,
                quantity: databaseItem.quantity,
              });
        } else {
          const sign = Math.sign(diff);
          switch (sign) {
            case 1:
              addedItems.value.push({
                id: item.id,
                inventoryId: item.inventoryId,
                itemId: item.itemId,
                quantity: diff,
              } as InventoryItem);
              break;
            case -1:
              deletedItemTemp.push({
                id: databaseItem.id,
                inventoryId: databaseItem.inventoryId,
                itemId: databaseItem.itemId,
                quantity: diff * -1,
              });
              break;
          }
        }
      }
    });
  deletedItems.value = deletedItemTemp;
};

watch(
  () => props.show,
  (value) => {
    if (value) {
      delta();
    }
  }
);

const getInventoryItemDescription = (
  item: InventoryItem,
  isRemoved: boolean
) => {
  return ` ${item.quantity} pieces of ${
    Object.values(InventoryItemEnum)[item.itemId - 1]
  } ${isRemoved ? "removed" : "added"}`;
};

const sendDeleteItemRequest = async () => {
  const ids: string[] = [];
  props.databaseItems.forEach((item) => {
    const index = props.currentItems.findIndex((i) => i.id == item.id);
    if (index == -1) {
      ids.push(item.id);
    }
  });
  await useFetch("/api/inventory-item", {
    method: "DELETE",
    body: ids,
  });
};

const sendInsertItemRequest = async () => {
  const items: InventoryItem[] = [];
  props.currentItems
    .filter((i) => i.id == "")
    .forEach((item) =>
      items.push({
        inventoryId: item.inventoryId,
        itemId: parseInt(item.itemId.toString()),
        quantity: parseInt(item.quantity.toString()),
      } as InventoryItem)
    );
  await useFetch("/api/inventory-item", {
    method: "POST",
    body: items,
  });
};

const sendUpdateItemRequest = async () => {
  const items: InventoryItem[] = [];
  props.currentItems
    .filter((i) => i.id != "")
    .forEach((item) =>
      items.push({
        id: item.id,
        inventoryId: item.inventoryId,
        itemId: parseInt(item.itemId.toString()),
        quantity: parseInt(item.quantity.toString()),
      } as InventoryItem)
    );
  await useFetch("/api/inventory-item", {
    method: "PUT",
    body: items,
  });
};

delta();
</script>
<template>
  <dialog
    id="preview-modal"
    class="modal"
    :class="{ 'modal-open': visibility }"
  >
    <div method="dialog" class="modal-box">
      <div class="grid grid-cols-2 gap-5 max-w-xs mx-auto">
        <div class="flex gap-2">
          <div
            class="box border h-4 w-4 bg-green-600 border-green-600 mt-1"
          ></div>
          <span>Add</span>
        </div>
        <div class="flex gap-2">
          <div class="box border h-4 w-4 bg-red-600 border-red-600 mt-1"></div>
          <span>Remove</span>
        </div>
      </div>
      <ul class="list-disc text-left ml-10 mt-5">
        <li v-for="addedItem in addedItems" class="text-green-600">
          <span>{{ getInventoryItemDescription(addedItem, false) }}</span>
        </li>
        <li v-for="deletedItem in deletedItems" class="text-red-600">
          <span>{{ getInventoryItemDescription(deletedItem, true) }}</span>
        </li>
      </ul>
      <div class="modal-action">
        <SimpleButton :color="SimpleButtonColor.Accent" @click="save()"
          >Save</SimpleButton
        >
        <SimpleButton @click="close()"> Cancel</SimpleButton>
      </div>
    </div>
  </dialog>
</template>
<style scoped></style>
