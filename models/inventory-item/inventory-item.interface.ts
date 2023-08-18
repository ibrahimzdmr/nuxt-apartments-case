import { InventoryItemEnum } from "~/enums/data/inventoryItem.enum";

export interface InventoryItem {
    id: string;
    inventoryId: string;
    itemId: InventoryItemEnum;
    quantity:number
}