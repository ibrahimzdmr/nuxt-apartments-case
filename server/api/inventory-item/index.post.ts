import { insertInventoryItem } from "~/database/inventory-item/inventory-item";
import { inventoryItemArrayValidationSchema } from "~/validations/inventory-item.validation";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    const validData = inventoryItemArrayValidationSchema.parse(body);
    await insertInventoryItem(validData);
    return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
