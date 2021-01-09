import { ArmorItem, classes, CloakItem, Item, JewelryItem, Slot, Specialization, TrinketItem, WeaponItem, WowClass } from "./data";

export interface Character {
    class: WowClass;
    spec: Specialization;
    items: {
        head: ArmorItem;
        neck: JewelryItem;
        shoulder: ArmorItem;
        cloak: CloakItem;
        chest: ArmorItem;
        wrist: ArmorItem;
        hands: ArmorItem;
        waist: ArmorItem;
        legs: ArmorItem;
        feet: ArmorItem;
        finger1: JewelryItem;
        finger2: JewelryItem;
        trinket1: TrinketItem;
        trinket2: TrinketItem;
        weapon: WeaponItem;
    };
}

export const anixa: Character = {
    class: classes.shaman,
    spec: classes.shaman.specializations.restoration,
    items: {},
};
