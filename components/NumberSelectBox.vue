<script setup lang="ts">
import {
  SimpleSelectColor,
  SimpleSelectSize,
} from "~/enums/components/simple-select.enum";
import { KeyValue } from "~/models/common/key-value.interface";

interface NumberSelectBoxProps {
  from: number;
  to: number;
  placeholder: string;
  size?: SimpleSelectSize;
  color?: SimpleSelectColor;
}

const props = defineProps<NumberSelectBoxProps>();

const data: KeyValue[] = [];

for (let index = props.from; index <= props.to; index++) {
  data.push({
    key: index.toString(),
    value: index.toString(),
  });
}

</script>
<template>
  <SimpleSelectBox
    :data="data"
    data-key="key"
    data-value="value"
    :placeholder="placeholder"
    :color="color"
    :size="size"
  ></SimpleSelectBox>
</template>
