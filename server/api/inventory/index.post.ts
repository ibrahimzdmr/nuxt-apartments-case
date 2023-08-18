import { inventoryArrayValidationSchema } from "~/validations/inventory.validation";
import { insertInventory } from "~/database/inventory/inventory";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    const validData = inventoryArrayValidationSchema.parse(body);
    await insertInventory(validData);
    return validData;
  } catch (error) {
    throw createError("invalid data");
  }
});
