<script setup lang="ts">
import cover from "~/assets/photos/black-cover.png";
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
    <Transition mode="in-out">
      <figure>
        <img
          :src="mouseOver ? cover : props.image"
          alt="image"
          :class="{ 'bg-no-repeat brightness-75': !mouseOver }"
        />
      </figure>
    </Transition>
    <div class="card-body items-center text-center">
      <div class="card-title text-2xl font-bold text-white">
        <slot name="header"></slot>
      </div>
      <Transition mode="in-out">
        <div v-if="mouseOver">
          <slot name="body"></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.card.image-full::before {
  opacity: 0;
}
</style>
