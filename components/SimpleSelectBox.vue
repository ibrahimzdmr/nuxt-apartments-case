<script setup lang="ts">
import {
  SimpleSelectColor,
  SimpleSelectSize,
} from "~/enums/components/simple-select.enum";

interface SimpleSelectBoxProps {
  data: any[];
  dataKey: string;
  dataValue: string;
  placeholder: string;
  modelValue?: any;
  size?: SimpleSelectSize;
  color?: SimpleSelectColor;
}

const props = withDefaults(defineProps<SimpleSelectBoxProps>(), {
  color: SimpleSelectColor.Default,
  size: SimpleSelectSize.Normal,
});
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
  const selectedText = selectedValue.target.value;
  const selectedItem = props.data.find(
    (item) => item[props.dataValue] === selectedText
  )[props.dataKey];
  emit("update:modelValue", selectedItem);
};

onMounted(() => {
  classCombine.value = `select ${props.size} ${props.color}`;
});
</script>
<template>
  <select
    :class="classCombine"
    @change="valueChanged($event)"
    :placeholder="placeholder"
  >
    <option v-for="item in data">
      {{ item[dataValue] }}
    </option>
  </select>
</template>
