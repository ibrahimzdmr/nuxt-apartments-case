<script setup lang="ts">
interface MessageErrorProps {
  text: string;
  ms: number;
  show: boolean;
}

const props = defineProps<MessageErrorProps>();
const emit = defineEmits<{
  (event: "hidden"): void;
}>();

const showLocal = ref(false);

watch(
  () => props.show,
  (value) => {
    if (value) {
      showLocal.value = true;
      setTimeout(() => {
        showLocal.value = false;
        emit("hidden");
      }, props.ms);
    }
  }
);
</script>

<template>
  <div class="alert alert-error" v-if="showLocal">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="text-white">{{ text }}</span>
  </div>
</template>
