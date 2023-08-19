<script setup lang="ts">
import {
  SimpleInputColor,
  SimpleInputSize,
} from "~/enums/components/simple-input.enum";

interface SimpleInputProps {
  color?: SimpleInputColor;
  size?: SimpleInputSize;
  border?: boolean;
  mask?: boolean;
  modelValue?: any;
  placeholder?: string;
}

const classCombine = ref();

const props = withDefaults(defineProps<SimpleInputProps>(), {
  border: false,
  size: SimpleInputSize.Normal,
  color: SimpleInputColor.Default,
  mask: false,
});

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) emit("update:modelValue", value);
  },
});

onMounted(() => {
  const border = props.border ? "input-bordered" : "";
  classCombine.value = `input w-full ${props.size} ${props.color} ${border}`;
});
</script>

<template>
  <input
    :type="props.mask ? 'password' : 'text'"
    v-bind:class="classCombine"
    v-model="value"
    :placeholder="placeholder"
    @keydown="emit('change', value)"
  />
</template>
