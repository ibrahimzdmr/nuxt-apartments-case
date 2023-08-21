import { inventoryItemArrayValidationSchema } from "~/validations/inventory-item.validation";
import { updateInventoryItem } from "~/database/inventory-item/inventory-item";

export default defineEventHandler(async (event) => {
  if (event.method !== "PUT") return;
  const body = await readBody(event);
  try {
    await inventoryItemArrayValidationSchema.parseAsync(body);
    body.forEach(async (item: any) => await updateInventoryItem(item));
    return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
