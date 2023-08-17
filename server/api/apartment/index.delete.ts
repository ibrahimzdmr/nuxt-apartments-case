import { deleteApartment } from "~/database/apartment/apartment";

export default defineEventHandler(async (event) => {
  if (event.method !== "DELETE") return;
  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return;

  deleteApartment(id)
});
