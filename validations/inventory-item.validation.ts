import * as zod from "zod";

export const inventoryItemValidationSchema = zod.object({
  id: zod.string(),
  inventoryId: zod.string().nonempty('Inventory Id is required'),
  itemId: zod.number(),
  quantity: zod.number().min(1, 'item quantity must be positive number').max(20, 'item quantity cannot exceed 20')
});

export const inventoryItemArrayValidationSchema = zod.array(inventoryItemValidationSchema);