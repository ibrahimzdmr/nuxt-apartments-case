import { loginValidationSchema } from "~/validations/user.validation";
import { login } from "~/database/user/user";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    const validData = loginValidationSchema.parse(body);
    await login(validData.email, validData.password);
    return validData;
  } catch (error) {
    throw createError("invalid data");
  }
});
