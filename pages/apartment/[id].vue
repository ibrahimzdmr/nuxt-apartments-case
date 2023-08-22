<script setup lang="ts">
import { Apartment } from "~/models/apartment/apartment.interface";

const { id } = useRoute().params;
const apartmentStore = useApartmentStore();
useInventoryStore();
useInventoryItemStore();

const apartment = ref<Apartment>();
const loading = useLoadingState();

const searchShow = useSearchShowState();

const success = reactive({
  visibility: false,
  text: "",
});
const successState = useSuccessMessageState();

watch(successState, (value) => {
  if (value) {
    success.visibility = true;
    success.text = "Inventory Saved!";
  }
});

onMounted(async () => {
  loading.value = true;
  if (Array.isArray(id)) {
    return;
  }
  apartment.value = await apartmentStore.getApartment(id);
  loading.value = false;
  searchShow.value = false;
});

onUnmounted(() => {
  searchShow.value = true;
});
</script>
<template>
  <div class="flex items-center justify-center mt-5 mb-10 mx-4 md:mx-0">
    <div v-if="apartment" class="md:w-5/12 sm:w-full">
      <MessageSuccess
        :show="success.visibility"
        :ms="5000"
        @hidden="() => (success.visibility = false)"
        :text="success.text"
      ></MessageSuccess>
      <img :src="apartment.photo" alt="image" class="rounded-3xl" />
      <ApartmentInventoryPanel
        :apartment-id="apartment.id"
      ></ApartmentInventoryPanel>
    </div>
  </div>
</template>
