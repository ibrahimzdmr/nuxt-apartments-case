import { inventoryValidationSchema } from "~/validations/inventory.validation";
import { updateInventory } from "~/database/inventory/inventory";

export default defineEventHandler(async (event) => {
  if (event.method !== "PUT") return;
  const body = await readBody(event);
  try {
  const validData = await inventoryValidationSchema.parseAsync(body);
  await updateInventory(validData);
  return "Completed";
  } catch (error) {
    throw createError("invalid data");
  }
});
