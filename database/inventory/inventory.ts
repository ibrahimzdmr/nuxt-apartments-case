import { Inventory } from "~/models/inventory/inventory.interface";
import prismaClient from "../../prisma/prisma";

export const getInventories = () => {
  return prismaClient.inventory.findMany();
};

export const getInventory = (inventoryId: string) => {
  return prismaClient.inventory.findUnique({
    where: {
      id: inventoryId,
    },
  });
};

export const insertInventory = async (inventories: Inventory[]) => {
  return await prismaClient.inventory.createMany({
    data: inventories,
  });
};

export const deleteInventory = async (inventoryId: string) => {
  return await prismaClient.inventory.delete({
    where: {
      id: inventoryId,
    },
  });
};

export const updateInventory = async (inventory: Inventory) => {
  return await prismaClient.inventory.update({
    where: {
      id: inventory.id,
    },
    data: {
        apartmentId: inventory.apartmentId
    },
  });
};
