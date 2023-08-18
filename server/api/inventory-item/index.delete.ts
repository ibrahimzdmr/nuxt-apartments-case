import { deleteInventoryItem } from "~/database/inventory-item/inventory-item";

export default defineEventHandler(async (event) => {
  if (event.method !== "DELETE") return;
  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return;

  deleteInventoryItem(id)
});
