import { deleteInventory } from "~/database/inventory/inventory";

export default defineEventHandler(async (event) => {
  if (event.method !== "DELETE") return;
  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return;

  deleteInventory(id)
});
