import {
  deleteBulkInventoryItem,
  deleteInventoryItem,
} from "~/database/inventory-item/inventory-item";

export default defineEventHandler(async (event) => {
  if (event.method !== "DELETE") return;
  const body = await readBody(event);
  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") {
    if (Array.isArray(body)) {
      await deleteBulkInventoryItem(body);
      return "Completed"
    }
    return;
  }

  deleteInventoryItem(id);
  return "Completed"
});
