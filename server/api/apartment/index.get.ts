import {
  getApartment,
  getApartments,
} from "~/database/apartment/apartment";

export default defineEventHandler((event) => {
  if (event.method !== "GET") return;

  const { id } = getQuery(event);

  if (Array.isArray(id) || typeof id !== "string") return getApartments();

  return getApartment(id);
});
