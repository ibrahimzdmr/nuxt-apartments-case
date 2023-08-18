import { getInventoryItem, getInventoryItems } from "~/database/inventory-item/inventory-item";

export default defineEventHandler((event) => {
  if (event.method !== "GET") return;

  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return getInventoryItems();

  return getInventoryItem(id);
});
