import { insertApartment } from "~/database/apartment/apartment";
import { apartmentArrayValidationSchema } from "../../../validations/apartment.validation";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    const validData = apartmentArrayValidationSchema.parse(body);
    await insertApartment(validData);
    return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
