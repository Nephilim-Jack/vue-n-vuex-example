export interface ItemCard {
    name: string;
    description: string;
    weight: number;
    class: string;
    type: string;
}

export interface PlayerInputProps {
    playerName: string;
    playerClass: string;
    inventorySlots: number;
}