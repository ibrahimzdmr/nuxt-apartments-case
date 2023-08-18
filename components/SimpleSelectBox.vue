<script setup lang="ts">
import { SimpleSelectColor, SimpleSelectSize } from "~/enums/components/simple-select.enum";
import { EnumType } from "typescript";

interface SimpleSelectBoxProps {
  data: any[];
  dataKey: string;
  dataValue: string;
  modelValue?: string;
  enum?: EnumType;
  placeholder: string;
  size?: SimpleSelectSize;
  color?: SimpleSelectColor;
}

const props = withDefaults(defineProps<SimpleSelectBoxProps>(), {
    color: SimpleSelectColor.Default,
    size: SimpleSelectSize.Normal
})
const selectedItem = ref();
const classCombine = ref();

const emit = defineEmits<{
  (event: "update:modelValue", value: any): void;
}>();

computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) emit("update:modelValue", value);
  },
});

const valueChanged = (selectedValue: any) => {
  emit("update:modelValue", selectedValue[props.dataKey]);
  selectedItem.value = selectedValue;
};

onMounted(() => {
  classCombine.value = `select ${props.size} ${props.color}`;
});


</script>
<template>
  <select :class="classCombine">
    <option v-for="item in data" @click="valueChanged(item)">
      {{ item[dataValue] }}
    </option>
  </select>
</template>
