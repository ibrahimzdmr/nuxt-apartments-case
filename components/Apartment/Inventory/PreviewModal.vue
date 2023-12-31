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
  (event: "saved"): void;
  (event: "closed"): void;
}>();

const visibility = ref(true);
const addedItems = ref();
const deletedItems = ref();
const loadingState = useLoadingState();
const successState = useSuccessMessageState();

const save = async () => {
  loadingState.value = true;
  await sendDeleteItemRequest();
  await sendInsertItemRequest();
  await sendUpdateItemRequest();
  emit("saved");
  close();
  loadingState.value = false;
  successState.value = true;
};

const close = () => {
  visibility.value = false;
  emit("closed");
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

const getInventoryItemEnumText = (itemId: number) => {
  return Object.values(InventoryItemEnum)[itemId - 1];
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
      <ul class="list-disc text-left ml-10 mt-5">
        <li v-for="addedItem in addedItems" class="text-green-600 text-lg mb-4">
          <span
            ><b>{{ addedItem.quantity }}</b> pieces of
            <b>{{ getInventoryItemEnumText(addedItem.itemId) }}</b> added</span
          >
        </li>
        <li v-for="deletedItem in deletedItems" class="text-red-600 text-lg mb-4">
          <span
            ><b>{{ deletedItem.quantity }}</b> pieces of
            <b>{{ getInventoryItemEnumText(deletedItem.itemId) }}</b>
            removed</span
          >
        </li>
      </ul>
      <div class="modal-action mt-5">
        <div class="justify-start">
          <div class="grid grid-cols-2">
            <div class="flex gap-2">
              <div
                class="box border h-4 w-4 bg-green-600 border-green-600 mt-1"
              ></div>
              <span>Add</span>
            </div>
            <div class="flex gap-2">
              <div
                class="box border h-4 w-4 bg-red-600 border-red-600 mt-1"
              ></div>
              <span>Remove</span>
            </div>
          </div>
        </div>
        <div>
          <SimpleButton :color="SimpleButtonColor.Accent" @click="save()" class="mr-5"
            >Save</SimpleButton
          >
          <SimpleButton @click="close()"> Cancel</SimpleButton>
        </div>
      </div>
    </div>
  </dialog>
</template>
<style scoped>
.modal-action {
  justify-content: space-between;
}
</style>
