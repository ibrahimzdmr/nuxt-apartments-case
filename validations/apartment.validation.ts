import * as zod from "zod";

export const apartmentValidationSchema = zod.object({
  address: zod.string().nonempty("Address is required"),
  floor: zod.string().nonempty("Floor is required"),
  doorNumber: zod.string().nonempty("Door Number is required"),
  id: zod.string(),
  photo: zod.string(),
});

export const apartmentArrayValidationSchema = zod.array(apartmentValidationSchema);