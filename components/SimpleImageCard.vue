<script setup lang="ts">
interface SimpleImageCardProps {
  image: string;
}

const props = defineProps<SimpleImageCardProps>();

const mouseOver = ref(false);
</script>
<template>
  <div
    class="card bg-base-100 image-full"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <figure>
      <img :src="props.image" alt="image" />
    </figure>
    <div class="card-body items-center text-center" v-if="mouseOver">
        <div class="card-title">
            <slot name="header"></slot>
        </div>
      <slot name="body"></slot>
    </div>
  </div>
</template>
