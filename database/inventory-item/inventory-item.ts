import { InventoryItem } from "~/models/inventory-item/inventory-item.interface";
import prismaClient from "../../prisma/prisma";

export const getInventoryItems = () => {
  return prismaClient.inventoryItem.findMany();
};

export const getInventoryItem = (inventoryItemId: string) => {
  return prismaClient.inventoryItem.findUnique({
    where: {
      id: inventoryItemId,
    },
  });
};

export const insertInventoryItem = async (inventoryItems: InventoryItem[]) => {
  return await prismaClient.inventoryItem.createMany({
    data: inventoryItems,
  });
};

export const deleteInventoryItem = async (inventoryItemId: string) => {
  return await prismaClient.inventoryItem.delete({
    where: {
      id: inventoryItemId,
    },
  });
};

export const deleteBulkInventoryItem = async (inventoryItemIds: string[]) => {
  return await prismaClient.inventoryItem.deleteMany({
    where: {
      id: {
        in: inventoryItemIds
      }
    }
  });
};

export const updateInventoryItem = async (inventoryItem: InventoryItem) => {
  return await prismaClient.inventoryItem.update({
    where: {
      id: inventoryItem.id,
    },
    data: {
        inventoryId: inventoryItem.inventoryId,
        itemId: inventoryItem.itemId,
        quantity: inventoryItem.quantity
    },
  });
};

