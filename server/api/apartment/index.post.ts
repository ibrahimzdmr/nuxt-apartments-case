import { insertApartment } from "~/database/apartment/apartment";

  export default defineEventHandler(async (event) => {
    if (event.method !== "POST") return;
    const body = await readBody(event)
    await insertApartment(body);
    return 'here';
  });
  