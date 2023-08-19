<script setup lang="ts">
import { InventoryItemEnum } from "~/enums/data/inventoryItem.enum";

interface InventoryItemSelectBoxProps {
  modelValue?: any;
}

const props = defineProps<InventoryItemSelectBoxProps>();

const emit = defineEmits<{
  (event: "update:modelValue", value: any): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) emit("update:modelValue", value);
  },
});

const data = Object.entries(InventoryItemEnum).filter(([key, value]) => isNaN(Number(value))).map(([key, value]) => ({
  key: key,
  value: value,
}));
</script>
<template>
  <SimpleSelectBox
    :data="data"
    placeholder="Inventory Item"
    data-key="key"
    data-value="value"
    v-model="value"
  ></SimpleSelectBox>
</template>
