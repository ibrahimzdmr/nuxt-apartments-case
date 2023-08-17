import { getApartment } from "../../database/apartment/apartment";

export default defineEventHandler((event) => {
  const { id } = getQuery(event);
  if (Array.isArray(id) || typeof id !== "string") return;

  return getApartment(id);
});
