<script setup lang="ts">
import {
  SimpleButtonColor,
  SimpleButtonSize,
} from "~/enums/components/simple-button.enum";

interface SimpleButtonProps {
  color?: SimpleButtonColor;
  size?: SimpleButtonSize;
  outline?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<SimpleButtonProps>(), {
  outline: false,
  size: SimpleButtonSize.Normal,
  color: SimpleButtonColor.Default,
});

const classCombine = ref();

const emit = defineEmits<{
  (event: "click"): void;
}>();

onMounted(() => {
  const outline = props.outline ? "btn-outline" : "";
  classCombine.value = `btn ${props.size} ${props.color} ${outline}`;
});
</script>

<template>
  <button :class="classCombine" @click="emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>
