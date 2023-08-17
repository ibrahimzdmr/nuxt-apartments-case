import { updateApartment } from "~/database/apartment/apartment";
import { apartmentValidationSchema } from "../../../validations/apartment.validation";

export default defineEventHandler(async (event) => {
  if (event.method !== "PUT") return;
  const body = await readBody(event);
  try {
  const validData = await apartmentValidationSchema.parseAsync(body);
  await updateApartment(validData);
  return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
