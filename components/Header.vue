<script setup lang="ts">
import Search from "~/assets/icons/search.svg"

const searchState = useSearchState();
const searchShowState = useSearchShowState();

</script>
<template>
  <div class="navbar bg-accent flex justify-between flex-col md:flex-row space-y-2 md:space-y-0">
    <a class="btn btn-ghost normal-case text-xl" @click="navigateTo('/')"><img src="@/assets/Logo.png" style="height: inherit;"></a>
    <div class="gap-5 mr-0 md:mr-5" v-if="searchShowState">
        <SimpleInput v-model="searchState" placeholder="Search" class="w-80"></SimpleInput>
        <Search class="w-12 h-12"></Search>
    </div>
  </div>
</template>
