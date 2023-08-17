<script setup lang="ts">
import { apartmentArrayValidationSchema } from '~/validations/apartment.validation';
import { Apartment } from '~/models/apartment/apartment.interface'
const qweqw = async () => {
    const z = {
        address: 'Address34',
        doorNumber: 'DoorNumber34',
        floor: 'Floor34',
        id: 'cllffx8qa0000bhxosz3vye7x'
    } as Apartment
    const { data, error } = await useFetch('api/apartment', {
        method: 'PUT',
        body: z
    });
    console.log(error);
}
</script>
<template>
    <div>
        <button @click="qweqw">qweqweqweqw</button>
    </div>
</template>