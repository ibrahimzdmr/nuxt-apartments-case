<script setup lang="ts">
import { useConfirmModalState } from "~/composables/states/confirm-modal.state";

interface ConfirmModalProps {
  text: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

const props = withDefaults(defineProps<ConfirmModalProps>(), {
  confirmText: "Confirm",
  cancelText: "Cancel",
  title: "Confirm!",
});

const confirmModalState = useConfirmModalState();

const emit = defineEmits<{
  (event: "cancel"): void;
  (event: "confirm"): void;
}>();

const cancel = () => {
  confirmModalState.value = false;
  emit("cancel");
};

const confirm = () => {
  confirmModalState.value = false;
  emit("confirm");
};
</script>
<template>
  <dialog
    id="confirm_modal"
    class="modal"
    :class="{ 'modal-open': confirmModalState }"
  >
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="py-4">{{ text }}</p>
      <div class="modal-action">
        <SimpleButton @click="confirm()">{{ confirmText }}</SimpleButton>
        <SimpleButton @click="cancel()"> {{ cancelText }}</SimpleButton>
      </div>
    </form>
  </dialog>
</template>
