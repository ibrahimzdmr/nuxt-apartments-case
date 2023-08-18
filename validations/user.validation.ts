import * as zod from "zod";

export const loginValidationSchema = zod.object({
    email: zod.string().email().nonempty('email is required'),
    password: zod.string().nonempty('password is required')
  });

  export const registerValidationSchema = zod.object({
    email: zod.string().email().nonempty('email is required'),
    password: zod.string().nonempty('password is required')
  })