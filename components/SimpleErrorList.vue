<script setup lang="ts">
interface SimpleErrorListProp {
    error: string | undefined
}
const props = defineProps<SimpleErrorListProp>();
</script>
<template>
    <ul class="list-disc text-left" v-if="error">
      <li
        class="text-error"
        v-text="error"
      ></li>
    </ul>
</template>