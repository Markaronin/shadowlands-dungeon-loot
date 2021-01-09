class Character {
    constructor(
        private readonly wowClass: WowClass,
        private readonly spec: Specialization,
        private readonly items: {
            head: ArmorItemWithIlvl;
            neck: JewelryItemWithIlvl;
            shoulder: ArmorItemWithIlvl;
            back: CloakItemWithIlvl;
            chest: ArmorItemWithIlvl;
            wrist: ArmorItemWithIlvl;
            hands: ArmorItemWithIlvl;
            waist: ArmorItemWithIlvl;
            legs: ArmorItemWithIlvl;
            feet: ArmorItemWithIlvl;
            finger: [JewelryItemWithIlvl, JewelryItemWithIlvl];
            trinket: [TrinketItemWithIlvl, TrinketItemWithIlvl];
            weapon: WeaponItemWithIlvl[];
        },
    ) {}

    public getIlvl() {
        return Object.values(this.items);
    }
}

const anixa = new Character(classes.shaman, classes.shaman.specializations.restoration, {
    head: {
        name: "Nathrian Usurper's Mask",
        slot: "head",
        type: "mail",
        ilvl: 207,
        mainSecondaryStat: "Versatility",
        otherSecondaryStat: "Haste",
    },
    neck: {
        name: "Gorewrought Medallion",
        slot: "neck",
        ilvl: 181,
        mainSecondaryStat: "Versatility",
        otherSecondaryStat: "Haste",
    },
    shoulder: {
        name: "Plagueborne Shoulderguards",
        slot: "shoulder",
        type: "mail",
        ilvl: 207,
        mainSecondaryStat: "Critical Strike",
        otherSecondaryStat: "Versatility",
    },
    back: {
        name: "Cloak of the Tidal Spiritwalker",
        slot: "back",
        ilvl: 225,
        mainSecondaryStat: "Haste",
        otherSecondaryStat: "Versatility",
    },
    chest: {
        name: "Consumptive Chainmail Carapace",
        slot: "chest",
        type: "mail",
        ilvl: 200,
        mainSecondaryStat: "Versatility",
        otherSecondaryStat: "Haste",
    },
    wrist: {
        name: "Fallen Paragon's Armguards",
        slot: "wrist",
        type: "mail",
        ilvl: 184,
        mainSecondaryStat: "Haste",
        otherSecondaryStat: "Versatility",
    },
    hands: {
        name: "Fearstalkers's Ebony Gauntlets",
        slot: "hands",
        type: "mail",
        ilvl: 190,
        mainSecondaryStat: "Critical Strike",
        otherSecondaryStat: "Haste",
    },
    waist: {
        name: "Fearstalker's Ebony Belt",
        slot: "waist",
        type: "mail",
        ilvl: 190,
        mainSecondaryStat: "Critical Strike",
        otherSecondaryStat: "Mastery",
    },
    legs: {
        name: "Memento-Laden Cuisses",
        slot: "legs",
        type: "mail",
        ilvl: 213,
        mainSecondaryStat: "Haste",
        otherSecondaryStat: "Versatility",
    },
    feet: {
        name: "Fearstalker's Ebony Sabatons",
        slot: "feet",
        type: "mail",
        ilvl: 190,
        mainSecondaryStat: "Critical Strike",
        otherSecondaryStat: "Versatility",
    },
    finger: [
        {
            name: "Ritual Bone Band",
            slot: "finger",
            ilvl: 187,
            mainSecondaryStat: "Versatility",
            otherSecondaryStat: "Mastery",
        },
        {
            name: "Bloodoath Signet",
            slot: "finger",
            ilvl: 194,
            mainSecondaryStat: "Haste",
            otherSecondaryStat: "Critical Strike",
        },
    ],
    trinket: [
        {
            name: "Tuft of Smoldering Plumage",
            slot: "trinket",
            ilvl: 200,
            stat: ["intellect"],
            effectSuitableFor: ["healer"],
        },
        {
            name: "Unbound Changeling",
            slot: "trinket",
            ilvl: 200,
            stat: ["intellect"],
            effectSuitableFor: "all",
        },
    ],
    weapon: [
        {
            name: "Scithewood Scepter",
            slot: "one hand",
            type: "one-handed mace",
            ilvl: 197,
            primaryStat: ["intellect"],
            mainSecondaryStat: "Mastery",
            otherSecondaryStat: "Critical Strike",
        },
        {
            name: "Acidslough Bulwark",
            slot: "off hand",
            type: "shield",
            ilvl: 171,
            primaryStat: ["intellect", "strength"],
            mainSecondaryStat: "Mastery",
            otherSecondaryStat: "Haste",
        },
    ],
});
