<script setup lang="ts">
import { SimpleSelectColor } from '~/enums/components/simple-select.enum';
import NumberSelectBox from './NumberSelectBox.vue';
import { InventoryItem } from '~/models/inventory-item/inventory-item.interface';
import { SimpleButtonColor } from '~/enums/components/simple-button.enum';


interface ApartmentInventoryListItemProps {
    inventoryId: string;
    inventoryItem?: InventoryItem
}

const props = defineProps<ApartmentInventoryListItemProps>();

const emit = defineEmits<{
  (event: "refresh"): void;
}>();

const itemRef = ref();
const quantity = ref();
const editMode = ref(false);
const loading = useLoadingState();

onMounted(() => {
    if (props.inventoryItem) {
        itemRef.value = props.inventoryItem.itemId;
        quantity.value = props.inventoryItem.quantity;
    }
    else
        editMode.value = true;
})

const add = async () => {
    loading.value = true;
    const request = {
        inventoryId: props.inventoryId,
        itemId: itemRef.value,
        quantity: quantity.value
    } as InventoryItem
    const response = await useFetch('/api/inventory-item', {
        method: 'POST',
        body: [request]
    })
    loading.value = false;
    if (response)
        emit("refresh");
}

</script>
<template>
    <div class="grid grid-cols-3 gap-3">
        <InventoryItemSelectBox v-model="itemRef" :color="SimpleSelectColor.Accent"></InventoryItemSelectBox>
        <NumberSelectBox  :from="1" :to="20" placeholder="Quantity" v-model="quantity" :color="SimpleSelectColor.Accent"></NumberSelectBox>
        <SimpleButton v-if="editMode" :color="SimpleButtonColor.Accent" @click="add">Add</SimpleButton>
        <div v-if="!editMode">
            <SimpleButton v-if="editMode" :color="SimpleButtonColor.Accent">Update</SimpleButton>
            <SimpleButton v-if="editMode" :color="SimpleButtonColor.Accent">Delete</SimpleButton>
        </div>
    </div>
</template>