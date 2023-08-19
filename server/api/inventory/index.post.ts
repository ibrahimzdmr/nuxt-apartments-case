import { inventoryInsertArrayValidationSchema } from "~/validations/inventory.validation";
import { insertInventory } from "~/database/inventory/inventory";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    inventoryInsertArrayValidationSchema.parse(body);
    return await insertInventory(body);
  } catch (error) {
    throw createError("invalid data");
  }
});
