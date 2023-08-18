<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import { loginValidationSchema } from '~/validations/user.validation';

const fieldSchema = toTypedSchema(loginValidationSchema);
const { handleSubmit, errors } = useForm({
  validationSchema: fieldSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');
const onSubmit = handleSubmit(values => {
  console.log(values)
});

</script>
<template>
  <form @submit="onSubmit">
    <input name="email" v-model="email" type="email" />
    <span>{{ errors.email }}</span>
    <input name="password" v-model="password" type="password" />
    <span>{{ errors.password }}</span>
    <button>Submit</button>
  </form>
</template>
