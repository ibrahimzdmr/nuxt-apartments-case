<script setup lang="ts">
import { useLoadingState } from '~/composables/states/loading.state';


const loadingState = useLoadingState();

</script>
<template>
  <div v-if="loadingState"
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-300 opacity-75 flex flex-col items-center justify-center"
  >
    <p class="loading loading-spinner loading-lg center text-center"></p>
    <h2 class="text-center text-xl font-semibold text-black">Loading...</h2>
    <p class="w-1/3 text-center text-black">
      This may take a few seconds, please don't close this page.
    </p>
  </div>
</template>