import { insertInventoryItem } from "~/database/inventory-item/inventory-item";
import { inventoryItemArrayValidationSchema } from "~/validations/inventory-item.validation";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return;
  const body = await readBody(event);
  try {
    inventoryItemArrayValidationSchema.parse(body);
    await insertInventoryItem(body);
    return true;
  } catch (error) {
    console.log(error);
    throw createError("invalid data");
  }
});
