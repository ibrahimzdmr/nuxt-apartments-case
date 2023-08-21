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
      <img :src="mouseOver ? cover : props.image" alt="image" :class="{'bg-no-repeat brightness-75' : !mouseOver}" />
    </figure>
    <Transition mode="in-out">
    <div class="card-body items-center text-center">
      <div class="card-title" :class="{ 'text-2xl font-bold' : !mouseOver}">
        <slot name="header"></slot>
      </div>
      <slot name="body"  v-if="mouseOver"></slot>
    </div>
  </Transition>
  </div>
</template>

<style>
.card.image-full::before {
  opacity: 0;
}
</style>
