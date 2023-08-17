<script setup lang="ts">
import { Apartment } from '~/models/apartment/apartment.interface'
const qweqw = async () => {
    const z = [{
        address: 'Address2',
        doorNumber: 'DoorNumber2',
        floor: 'Floor2',
    }] as Apartment[]
    const { data } = await useFetch('api/apartment', {
        method: 'POST',
        body: z
    });
    console.log(data.value);
}
</script>
<template>
    <div>
        <button @click="qweqw">qweqweqweqw</button>
    </div>
</template>