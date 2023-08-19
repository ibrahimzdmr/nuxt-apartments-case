import * as zod from "zod";

export const inventoryValidationSchema = zod.object({
  id: zod.string(),
  apartmentId: zod.string().nonempty("Apartmend Id is required")
});

export const inventoryArrayValidationSchema = zod.array(inventoryValidationSchema);

export const inventoryInsertValidationSchema = zod.object({
  apartmentId: zod.string().nonempty("Apartmend Id is required")
});

export const inventoryInsertArrayValidationSchema = zod.array(inventoryInsertValidationSchema);
