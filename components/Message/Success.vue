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
  <Transition mode="default">
    <div class="alert alert-success local-alert" v-if="showLocal">
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ text }}</span>
    </div>
  </Transition>
</template>
<style scoped>
.local-alert {
  z-index: 50;
  position: fixed;
  width: inherit;
  top: 5;
  @apply bg-green-600
}
</style>
