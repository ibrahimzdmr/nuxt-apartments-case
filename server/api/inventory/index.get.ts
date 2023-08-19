import { getInventories, getInventory } from "~/database/inventory/inventory";

export default defineEventHandler(async (event) => {
  if (event.method !== "GET") return;

  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return getInventories();

  return getInventory(id);
});
