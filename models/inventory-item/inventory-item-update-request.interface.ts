import { InventoryItem } from "./inventory-item.interface";

export interface InventoryItemUpdateRequest {
    inventoryItem: InventoryItem;
    index: number;
}