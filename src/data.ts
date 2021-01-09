export type ArmorType = "cloth" | "leather" | "mail" | "plate";
export type WeaponType =
    | "staff"
    | "two-handed sword"
    | "one-handed sword"
    | "two-handed axe"
    | "one-handed axe"
    | "two-handed mace"
    | "one-handed mace"
    | "polearm"
    | "dagger"
    | "fist weapon"
    | "warglaive"
    | "wand"
    | "off-hand"
    | "shield"
    | "ranged";

export type PrimaryStat = "intellect" | "agility" | "strength";
export type SecondaryStat = "Haste" | "Versatility" | "Mastery" | "Critical Strike";

export type ArmorSlot = "head" | "shoulder" | "chest" | "wrist" | "hands" | "waist" | "legs" | "feet";
export type WeaponSlot = "one hand" | "off hand" | "both hands";
export type JewelrySlot = "neck" | "finger";
export type Slot = ArmorSlot | WeaponSlot | JewelrySlot | "back" | "trinket";

export type Role = "tank" | "dps" | "healer";

export interface BaseItem {
    name: string;
    slot: Slot;
}

export interface ArmorItem extends BaseItem {
    slot: ArmorSlot;
    type: ArmorType;
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
export interface WeaponItem extends BaseItem {
    slot: WeaponSlot;
    type: WeaponType;
    primaryStat: PrimaryStat[];
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
export interface JewelryItem extends BaseItem {
    slot: JewelrySlot;
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
export interface CloakItem extends BaseItem {
    slot: "back";
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
export interface TrinketItem extends BaseItem {
    slot: "trinket";
    stat: PrimaryStat[] | SecondaryStat;
    effectSuitableFor: Role[]|PrimaryStat|"all";
}
export type Item = ArmorItem | WeaponItem | JewelryItem | CloakItem | TrinketItem;

export interface Boss {
    name: string;
    loot: Item[];
}

export type DungeonName = "De Other Side" | "Halls of Atonement" | "Mists of Tirna Scithe" | "Plaguefall" | "Sanguine Depths" | "Spires of Ascension" | "The Necrotic Wake" | "Theater of Pain";
export interface Dungeon {
    name: DungeonName;
    bosses: Boss[];
}

export const dungeons: Dungeon[] = [
    {
        name: "De Other Side",
        bosses: [
            {
                name: "Hakkar the Soulflayer",
                loot: [
                    {
                        name: "Zin'khas, Blade of the Fallen God",
                        primaryStat: ["strength"],
                        slot: "both hands",
                        type: "two-handed sword",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Bloodspiller",
                        primaryStat: ["agility"],
                        slot: "one hand",
                        type: "one-handed sword",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Hakkari Revenant's Grips",
                        slot: "hands",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },

                    {
                        name: "Girdle of the Soulflayer",
                        slot: "waist",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },

                    {
                        name: "Soulfeather Breeches",
                        slot: "legs",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },

                    {
                        name: "Windscale Moccasins",
                        slot: "feet",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Blood-Spattered Scale",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["dps", "tank"],
                    },
                ],
            },
            {
                name: "The Manastorms",
                loot: [
                    {
                        name: "Whizblast Walking Stick",
                        slot: "both hands",
                        type: "staff",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Supercollider",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Manastorm's Magnificent Threads",
                        slot: "chest",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Rocket Chicken Handlers",
                        slot: "hands",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Techno-Coil Leggaurds",
                        slot: "legs",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Dynamo Doomstompers",
                        slot: "feet",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Overwhelming Power Crystal",
                        slot: "trinket",
                        stat: ["strength"],
                        effectSuitableFor: "all",
                    },
                ],
            },
            {
                name: "Dealer Xy'exa",
                loot: [
                    {
                        name: "Collector's Pulse Staff",
                        slot: "both hands",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                        type: "staff",
                    },
                    {
                        name: "Xy Cartel Crossbow",
                        slot: "both hands",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                        type: "ranged",
                    },
                    {
                        name: "Far Traveler's Shoulderpads",
                        slot: "shoulder",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Dealer Xy'exa's Cape",
                        slot: "back",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Breastplate of Fatal Contrivances",
                        slot: "chest",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Sash of Exquisite Acquisitions",
                        slot: "waist",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Spatial Rift Striders",
                        slot: "feet",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Inscrutable Quantum Device",
                        slot: "trinket",
                        stat: ["agility", "intellect", "strength"],
                        effectSuitableFor: "all",
                    },
                ],
            },
            {
                name: "Mueh'zala",
                loot: [
                    {
                        name: "Harness of Twisted Whims",
                        slot: "chest",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Reality-Shadder Vambraces",
                        slot: "wrist",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Mueh'zala's Hexthread Sarong",
                        slot: "legs",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Primeval Soul's Ankleguards",
                        slot: "feet",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Death God's Signet",
                        slot: "finger",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Shadowgrasp Totem",
                        slot: "trinket",
                        stat: ["agility"],
                        effectSuitableFor: ["dps", "tank"],
                    },
                ],
            },
        ],
    },
    {
        name: "Halls of Atonement",
        bosses: [
            {
                name: "Halkias, the Sin-Stained Goliath",
                loot: [
                    {
                        name: "Hood of Refracted Shadows",
                        slot: "head",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Sin Stained Pendant",
                        slot: "neck",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Sinlight Shroud",
                        slot: "chest",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Halkias's Towering Pillars",
                        slot: "legs",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Shardskin Sabatons",
                        slot: "feet",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike"
                    },
                ],
            },
            {
                name: "Echelon",
                loot: [
                    {
                        name: "Stoneguardian's Morningstar",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Wing Commander's Helmet",
                        slot: "head",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Soaring Decimator's Hauberk",
                        slot: "chest",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Stonefiend Shaper's Mitts",
                        slot: "hands",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Skyterror's Stonehide Leggings",
                        slot: "legs",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Pulsating Stoneheart",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["tank"],
                    },
                ],
            },
            {
                name: "High Adjudicator Aleez",
                loot: [
                    {
                        name: "Nathrian Tabernacle",
                        slot: "off hand",
                        type: "off-hand",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike"
                    },
                    {
                        name: "Mantle of Ephemeral Visages",
                        slot: "shoulder",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Breastplate of Otherworldly Influence",
                        slot: "chest",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Gloves of Haunting Fixation",
                        slot: "hands",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste"
                    },
                    {
                        name: "Cord of the Dark Word",
                        slot: "waist",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Sunblood Amethyst",
                        slot: "trinket",
                        stat: "Haste",
                        effectSuitableFor: "intellect",
                    },
                ],
            },
            {
                name: "Lord Chamberlain",
                loot: [
                    {
                        name: "Nathrian Ferula",
                        slot: "both hands",
                        type: "staff",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Nathrian Usurper's Mask",
                        slot: "head",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Pauldrons of Unleashed Pride",
                        slot: "shoulder",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Waistcord of Dark Devotion",
                        slot: "waist",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Slippers of Leavened Station",
                        slot: "feet",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Signet of the False Accuser",
                        slot: "finger",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                ],
            },
        ],
    },
    {
        name: "Mists of Tirna Scithe",
        bosses: [
            {
                name: "Ingra Maloch",
                loot: [
                    {
                        name: "Dristlord's Greataxe",
                        slot: "both hands",
                        type: "two-handed axe",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Scithewood Scepter",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike"
                    },
                    {
                        name: "Soulthorn Visage",
                        slot: "head",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Wrathbark Greathelm",
                        slot: "head",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Ingra Maloch's Mantle",
                        slot: "shoulder",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility"
                    },
                    {
                        name: "Rainshadow Hauberk",
                        slot: "chest",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Deathshackle Wristraps",
                        slot: "wrist",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility"
                    },
                    {
                        name: "Clasp of Waning Shadow",
                        slot: "waist",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Unbound Changeling",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: "all"
                    }
                ],
            },
            {
                name: "Mistcaller",
                loot: [
                    {
                        name: "Tanklewood Thorn",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Hood of the Hidden Path",
                        slot: "head",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Trailspinner Pendant",
                        slot: "neck",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Prankster's Pauldrons",
                        slot: "shoulder",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Wintersnap Shoulderguards",
                        slot: "shoulder",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fogweaver Gauntlets",
                        slot: "hands",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Tricksprite Gloves",
                        slot: "hands",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Mistcaller Ocarina",
                        slot: "trinket",
                        stat: ["agility"],
                        effectSuitableFor: "all",
                    }
                ],
            },
            {
                name: "Tred'ova",
                loot: [
                    {
                        name: "Lakali's Spire of Knowledge",
                        slot: "both hands",
                        type: "staff",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Axe of the Deadgrove",
                        slot: "one hand",
                        type: "one-handed axe",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste"
                    },
                    {
                        name: "Acidslough Bulwark",
                        slot: "off hand",
                        type: "shield",
                        primaryStat: ["strength", "intellect"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Cocoonsilk Cowl",
                        slot: "head",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Bands of the Undergrowth",
                        slot: "waist",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Hiveswarm Bracers",
                        slot: "wrist",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Sapgorger Belt",
                        slot: "waist",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Gormshell Greaves",
                        slot: "legs",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                ],
            },
        ],
    },
    {
        name: "Plaguefall",
        bosses: [
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
        ],
    },
    {
        name: "Sanguine Depths",
        bosses: [
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
        ],
    },
    {
        name: "Spires of Ascension",
        bosses: [
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
        ],
    },
    {
        name: "The Necrotic Wake",
        bosses: [
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
        ],
    },
    {
        name: "Theater of Pain",
        bosses: [
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
            {
                name: "",
                loot: [
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                    {
                        name: "",
                        slot: 
                    },
                ],
            },
        ],
    },
];

export interface Specialization {
    primaryStat: PrimaryStat,
    usableWeapons: WeaponType[],
    weaponSlots: WeaponSlot[][],
    role: Role,
}
export interface WowClass {
    usableArmor: ArmorType,
    specializations: Record<string, Specialization>,
}

export const classes: Record<string, WowClass> = {
    "warrior": {
        usableArmor: "plate",
        specializations: {
            "fury": {
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword", "polearm"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"], ["both hands", "one hand"], ["both hands", "both hands"]]
            },
            "arms": {
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword", "polearm"],
                role: "dps",
                weaponSlots: [["both hands"]]
            },
            "protection": {
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"]]
            }
        }
    },
    "paladin": {
        usableArmor: "plate",
        specializations: {
            "holy": {
                primaryStat: "intellect",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"]],
            },
            "protection": {
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"]],
            },
            "retribution": {
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["both hands"]],
            }
        }
    },
    "hunter": {
        usableArmor: "mail",
        specializations: {
            "marksmanship": {
                primaryStat: "agility",
                usableWeapons: ["ranged"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            "beast mastery": {
                primaryStat: "agility",
                usableWeapons: ["ranged"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            "survival": {
                primaryStat: "agility",
                usableWeapons: ["polearm"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
        }
    },
    "rogue": {
        usableArmor: "leather",
        specializations: {
            "sublety": {
                primaryStat: "agility",
                usableWeapons: ["dagger"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            "assassination": {
                primaryStat: "agility",
                usableWeapons: ["dagger"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            "outlaw": {
                primaryStat: "agility",
                usableWeapons: ["one-handed sword", "one-handed axe", "one-handed mace"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
        }
    },
    "priest": {
        usableArmor: "cloth",
        specializations: {
            "holy": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "discipline": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "shadow": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        }
    },
    "shaman": {
        usableArmor: "mail",
        specializations: {
            "restoration": {
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "shield", "staff"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "enhancement": {
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            "elemental": {
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "shield", "staff"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        }
    },
    "mage": {
        usableArmor: "cloth",
        specializations: {
            "fire": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "frost": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "arcane": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        }
    },
    "warlock": {
        usableArmor: "cloth",
        specializations: {
            "affliction": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "destruction": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "demonology": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        }
    },
    "monk": {
        usableArmor: "leather",
        specializations: {
            "brewmaster": {
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "tank",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
            "windwalker": {
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
            "mistweaver": {
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "healer",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
        }
    },
    "druid": {
        usableArmor: "leather",
        specializations: {
            "restoration": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "guardian": {
                primaryStat: "agility",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "feral": {
                primaryStat: "agility",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            "balance": {
                primaryStat: "intellect",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        }
    },
    "demon hunter": {
        usableArmor: "leather",
        specializations: {
            "havoc": {
                primaryStat: "agility",
                usableWeapons: ["warglaive", "fist weapon", "one-handed axe", "one-handed sword"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            "vengeance": {
                primaryStat: "agility",
                usableWeapons: ["warglaive", "fist weapon", "one-handed axe", "one-handed sword"],
                role: "tank",
                weaponSlots: [["one hand", "one hand"]],
            },
        }
    },
    "death knight": {
        usableArmor: "plate",
        specializations: {
            "blood": {
                primaryStat: "strength",
                usableWeapons: ["polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "tank",
                weaponSlots: [["both hands"]],
            },
            "unholy": {
                primaryStat: "strength",
                usableWeapons: ["polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            "frost": {
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
        }
    },
}