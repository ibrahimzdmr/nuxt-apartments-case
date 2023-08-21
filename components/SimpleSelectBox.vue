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
  disabled?: boolean;
}

const props = withDefaults(defineProps<SimpleSelectBoxProps>(), {
  color: SimpleSelectColor.Default,
  size: SimpleSelectSize.Normal,
});
const classCombine = ref();
const defaultValue = ref();

const emit = defineEmits<{
  (event: "update:modelValue", value: any): void;
}>();

const val = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) emit("update:modelValue", value);
  },
});

const getValueFromText = (text: any) => {
  return props.data.find(
    (item) => item[props.dataValue] === text
  )[props.dataKey];
}


const valueChanged = (selectedValue: any) => {
  const selectedText = selectedValue.target.value;
  const selectedItem = props.data.find(
    (item) => item[props.dataValue] === selectedText
  )[props.dataKey];
  emit("update:modelValue", selectedItem);
};

onMounted(() => {
  classCombine.value = `select ${props.size} ${props.color}`;
  if (props.modelValue)
    defaultValue.value = props.data.find(
      (i) => i[props.dataKey] == props.modelValue
    )[props.dataValue];
  else defaultValue.value = "Select";
});

watch(() => props.modelValue, value => {
  if (!value) {
    defaultValue.value = "Select";
  }
  else
  defaultValue.value = props.data.find(
      (i) => i[props.dataKey] == props.modelValue
    )[props.dataValue];
})

</script>
<template>
  <select
    :class="classCombine"
    :placeholder="placeholder"
    :disabled="disabled"
    @change="valueChanged($event)"
    v-model="defaultValue"
  >
    <option disabled selected>Select</option>
    <option v-for="item in data">
      {{ item[dataValue] }}
    </option>
  </select>
</template>
