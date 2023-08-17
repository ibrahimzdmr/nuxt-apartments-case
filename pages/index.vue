<script setup lang="ts">
const qweqw = async () => {
    const {data } = await useFetch('api/test');
    console.log(data);
}
</script>
<template>
    <div>
        <button @click="qweqw">qweqweqweqw</button>
    </div>
</template>