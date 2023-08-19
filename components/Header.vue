<script setup lang="ts">
import Search from "~/assets/icons/search.svg"

const searchState = useSearchState();
const emit = defineEmits<{
  (event: "change", value: string): void;
}>();
 
</script>
<template>
  <div class="navbar bg-secondary flex justify-between">
    <a class="btn btn-ghost normal-case text-xl" @click="navigateTo('/')">Rently</a>
    <div class="gap-5">
        <SimpleInput v-model="searchState" placeholder="Search" @change="emit('change', $event)"></SimpleInput>
        <Search class="w-12 h-12"></Search>
    </div>
  </div>
</template>
