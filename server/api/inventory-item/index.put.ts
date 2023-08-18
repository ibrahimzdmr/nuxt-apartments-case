import { inventoryItemValidationSchema } from "~/validations/inventory-item.validation";
import { updateInventoryItem } from "~/database/inventory-item/inventory-item";

export default defineEventHandler(async (event) => {
  if (event.method !== "PUT") return;
  const body = await readBody(event);
  try {
  const validData = await inventoryItemValidationSchema.parseAsync(body);
  await updateInventoryItem(validData);
  return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
