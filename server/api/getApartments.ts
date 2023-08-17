import { getApartments } from "../../database/apartment/apartment"

export default defineEventHandler(() => {
    return getApartments();
})