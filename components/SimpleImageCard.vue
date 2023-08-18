<script setup lang="ts">
import cover from "../assets/photos/black-cover.png";
interface SimpleImageCardProps {
  image: string;
}

const props = defineProps<SimpleImageCardProps>();

const mouseOver = ref(false);
</script>

<template>
  <div
    class="card image-full"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <figure>
      <img :src="mouseOver ? cover : props.image" alt="image" />
    </figure>
    <div class="card-body items-center text-center" v-if="mouseOver">
      <div class="card-title">
        <slot name="header"></slot>
      </div>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style>
.card.image-full::before {
  opacity: 0;
}
</style>
