type ArmorType = "cloth" | "leather" | "mail" | "plate";
type WeaponType =
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

type PrimaryStat = "intellect" | "agility" | "strength";
type SecondaryStat = "Haste" | "Versatility" | "Mastery" | "Critical Strike";

type ArmorSlot = "head" | "shoulder" | "chest" | "wrist" | "hands" | "waist" | "legs" | "feet";
type WeaponSlot = "one hand" | "off hand" | "both hands";
type JewelrySlot = "neck" | "finger";
type Slot = ArmorSlot | WeaponSlot | JewelrySlot | "back" | "trinket";

type Role = "tank" | "dps" | "healer";

interface BaseItem {
    name: string;
    slot: Slot;
}

interface ArmorItem extends BaseItem {
    slot: ArmorSlot;
    type: ArmorType;
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
interface WeaponItem extends BaseItem {
    slot: WeaponSlot;
    type: WeaponType;
    primaryStat: PrimaryStat[];
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
interface JewelryItem extends BaseItem {
    slot: JewelrySlot;
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
interface CloakItem extends BaseItem {
    slot: "back";
    mainSecondaryStat: SecondaryStat;
    otherSecondaryStat: SecondaryStat;
}
interface TrinketItem extends BaseItem {
    slot: "trinket";
    stat: PrimaryStat[] | SecondaryStat;
    effectSuitableFor: Role[] | PrimaryStat | "all";
}
type Item = ArmorItem | WeaponItem | JewelryItem | CloakItem | TrinketItem;

interface ArmorItemWithIlvl extends ArmorItem {
    ilvl: number;
}
interface WeaponItemWithIlvl extends WeaponItem {
    ilvl: number;
}
interface JewelryItemWithIlvl extends JewelryItem {
    ilvl: number;
}
interface CloakItemWithIlvl extends CloakItem {
    ilvl: number;
}
interface TrinketItemWithIlvl extends TrinketItem {
    ilvl: number;
}
type ItemWithIlvl = ArmorItemWithIlvl | WeaponItemWithIlvl | JewelryItemWithIlvl | CloakItemWithIlvl | TrinketItemWithIlvl;

interface Boss {
    name: string;
    loot: Item[];
}

type DungeonName =
    | "De Other Side"
    | "Halls of Atonement"
    | "Mists of Tirna Scithe"
    | "Plaguefall"
    | "Sanguine Depths"
    | "Spires of Ascension"
    | "The Necrotic Wake"
    | "Theater of Pain";
interface Dungeon {
    name: DungeonName;
    bosses: Boss[];
}

const dungeons: Dungeon[] = [
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
                        otherSecondaryStat: "Critical Strike",
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
                        otherSecondaryStat: "Critical Strike",
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
                        otherSecondaryStat: "Haste",
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
                        otherSecondaryStat: "Critical Strike",
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
                        otherSecondaryStat: "Versatility",
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
                        otherSecondaryStat: "Versatility",
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
                        effectSuitableFor: "all",
                    },
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
                    },
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
                        otherSecondaryStat: "Haste",
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
                name: "Globgrog",
                loot: [
                    {
                        name: "Surgical Pustule Extractor",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Digested Interrogator's Gaze",
                        slot: "head",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Plage Handler's Greathelm",
                        slot: "head",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Blightborne Chain Legguards",
                        slot: "legs",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Stradama's Misplaced Slippers",
                        slot: "feet",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Slimy Consumptive Organ",
                        slot: "trinket",
                        stat: "Versatility", // Innacurate because it's actually stamina
                        effectSuitableFor: ["tank"],
                    },
                ],
            },
            {
                name: "Doctor Ickus",
                loot: [
                    {
                        name: "Sophisticated Bonecracker",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Depraved Physician's Mask",
                        slot: "head",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Malodorous Gristle-Sown Spaulders",
                        slot: "shoulder",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Tortured Assisstant's Bindings",
                        slot: "wrist",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fleshfused Crushers",
                        slot: "hands",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Phial of Putrefaction",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["tank", "dps"],
                    },
                ],
            },
            {
                name: "Domina Venomblade",
                loot: [
                    {
                        name: "Halverd of the Aranakk",
                        slot: "both hands",
                        type: "polearm",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Domina's Oozing Shiv",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fastened Venombarb Binds",
                        slot: "wrist",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Mitts of Flawless Duplication",
                        slot: "hands",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Belt of Wretched Manipulations",
                        slot: "waist",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Scarred Bloodbound Girdle",
                        slot: "waist",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Arachnid Cipher Ring",
                        slot: "finger",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                ],
            },
            {
                name: "Margrave Stradama",
                loot: [
                    {
                        name: "Poxstorm, Longsword of Pestilence",
                        slot: "one hand",
                        type: "one-handed sword",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Plagueborne Shoulderguards",
                        slot: "shoulder",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Blighted Margave's Cloak",
                        slot: "back",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Gloves of Obscure Rituals",
                        slot: "hands",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Leggings of the Erudite Scholar",
                        slot: "legs",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Muckwallow Stompers",
                        slot: "feet",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Infinitely Divisible Ooze",
                        slot: "trinket",
                        stat: ["agility", "intellect"],
                        effectSuitableFor: ["dps"],
                    },
                ],
            },
        ],
    },
    {
        name: "Sanguine Depths",
        bosses: [
            {
                name: "Kryxis the Voracious",
                loot: [
                    {
                        name: "Hungering Devourer's Twinblade",
                        slot: "one hand",
                        type: "warglaive",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Voracious Gorger Spine",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Anima-Splattered Hide",
                        slot: "chest",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Essence Surge Binders",
                        slot: "wrist",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Shackles of Alluring Vitality",
                        slot: "wrist",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Sabatons of the Rushing Juggernaut",
                        slot: "feet",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Entwined Gorger Tendril",
                        slot: "finger",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                ],
            },
            {
                name: "Executor Tarvold",
                loot: [
                    {
                        name: "Sinsmasher",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Castigator's Mantle",
                        slot: "shoulder",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Cloak of Enveloping Manifestations",
                        slot: "back",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Vambraces of the Depraved Warden",
                        slot: "wrist",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Executor's Prideful Girdle",
                        slot: "waist",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Sinsoaked Waders",
                        slot: "feet",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Overflowing Anima Cage",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: "all",
                    },
                ],
            },
            {
                name: "Grand Proctor Beryllia",
                loot: [
                    {
                        name: "Vessel of Shining Radiance",
                        slot: "off hand",
                        type: "off-hand",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Radiant Light Binders",
                        slot: "wrist",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Iron Spiked Handgrips",
                        slot: "hands",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Waistguard of Expurged Anguish",
                        slot: "waist",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Beryllia's Leggings of Endless Torment",
                        slot: "legs",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Lingering Sunmote",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: ["healer"],
                    },
                ],
            },
            {
                name: "General Kaal",
                loot: [
                    {
                        name: "Kaal's Gloomblade",
                        slot: "one hand",
                        type: "one-handed sword",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Stone General's Edge",
                        slot: "one hand",
                        type: "one-handed axe",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Cowl of the Devoted General",
                        slot: "head",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Wicked Bladewing Pauldrons",
                        slot: "shoulder",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Guilewind Stone Talons",
                        slot: "hands",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Wind Dancer's Legguards",
                        slot: "legs",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Bladedancer's Armor Kit",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["tank"],
                    },
                    {
                        name: "Decanter of Anima-Charged Winds",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["dps", "tank"],
                    },
                ],
            },
        ],
    },
    {
        name: "Spires of Ascension",
        bosses: [
            {
                name: "Kin-Tara",
                loot: [
                    {
                        name: "Quarterstaff of Discordant Ethic",
                        slot: "both hands",
                        type: "staff",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Azure-Venom Choker",
                        slot: "neck",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Forsworn Stalker's Hauberk",
                        slot: "chest",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Winged Hunters' Gloves",
                        slot: "hands",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Kin-Tara's Baleful Cord",
                        slot: "waist",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Warboots of Ruthless Conviction",
                        slot: "feet",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                ],
            },
            {
                name: "Ventunax",
                loot: [
                    {
                        name: "Penitent Edge",
                        slot: "one hand",
                        type: "one-handed axe",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Distorted Construct's Gauntlets",
                        slot: "hands",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Dark Praetorian's Clasp",
                        slot: "waist",
                        type: "mail",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Shadowhirl Waistwrap",
                        slot: "waist",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Dark Stride Footwraps",
                        slot: "feet",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Overcharged Anima Battery",
                        slot: "trinket",
                        stat: ["agility"],
                        effectSuitableFor: "all",
                    },
                ],
            },
            {
                name: "Oryphrion",
                loot: [
                    {
                        name: "The Philosopher",
                        slot: "both hands",
                        type: "ranged",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Vicious Surge Faceguard",
                        slot: "head",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Thunderous Echo Vambraces",
                        slot: "wrist",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Absonant Construct's Handguards",
                        slot: "hands",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Purge Protocol Legwraps",
                        slot: "legs",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Anima Field Emitter",
                        slot: "trinket",
                        stat: ["strength"],
                        effectSuitableFor: "all",
                    },
                    {
                        name: "Empyreal Ordnance",
                        slot: "trinket",
                        stat: "Mastery",
                        effectSuitableFor: "intellect",
                    },
                ],
            },
            {
                name: "Devos, Paragon of Doubt",
                loot: [
                    {
                        name: "Devos's Cacophonous Poleaxe",
                        slot: "both hands",
                        type: "polearm",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Drape of Twisted Loyalties",
                        slot: "back",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Breastplate of Brutal Dissonance",
                        slot: "chest",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Sinister Requiem Vestments",
                        slot: "chest",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Fallen Paragon's Armguards",
                        slot: "wrist",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Abyssal Disharmony Breeches",
                        slot: "legs",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Boon of the Archon",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: ["healer"],
                    },
                ],
            },
        ],
    },
    {
        name: "The Necrotic Wake",
        bosses: [
            {
                name: "Blightbone",
                loot: [
                    {
                        name: "Engorged Worm Smasher",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Blight Belcher",
                        slot: "both hands",
                        type: "ranged",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Abominable Visage",
                        slot: "head",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Blightbone Spaulders",
                        slot: "shoulder",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fused Bone Greatbelt",
                        slot: "waist",
                        type: "plate",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: " Viscera-Stitched Footpads",
                        slot: "feet",
                        type: "leather",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Stitchflesh's Misplaced Signet",
                        slot: "finger",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                ],
            },
            {
                name: "Amarth, The Harvester",
                loot: [
                    {
                        name: "Amarth's Spellblade",
                        slot: "one hand",
                        type: "one-handed sword",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Rattling Deadeye Hood",
                        slot: "head",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Reanimator's Mantle",
                        slot: "shoulder",
                        type: "cloth",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Risen Monstrosity Cuffs",
                        slot: "wrist",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Legplates of Unholy Frenzy",
                        slot: "legs",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Bottled Flayedwing Toxin",
                        slot: "trinket",
                        stat: ["agility"],
                        effectSuitableFor: ["dps"],
                    },
                ],
            },
            {
                name: "Surgeon Stitchflesh",
                loot: [
                    {
                        name: "Stitchflesh's Scalpel",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Encrusted Canopic Lid",
                        slot: "off hand",
                        type: "shield",
                        primaryStat: ["intellect", "strength"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Vile Butcher's Pauldrons",
                        slot: "shoulder",
                        type: "plate",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Freshly Embalmed Jerkin",
                        slot: "chest",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Gory Surgeon's Gloves",
                        slot: "hands",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Striders of Restless Malice",
                        slot: "feet",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Satchel of Misbegotten Minions",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: ["dps"],
                    },
                    {
                        name: "Spare Meat Hook",
                        slot: "trinket",
                        stat: ["strength"],
                        effectSuitableFor: ["dps"],
                    },
                ],
            },
            {
                name: "Nalthor the Rimebinder",
                loot: [
                    {
                        name: "Rimebinder's Runeblade",
                        slot: "both hands",
                        type: "two-handed sword",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Darkfrost Helmet",
                        slot: "head",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Undying Chill Shoulderpads",
                        slot: "shoulder",
                        type: "leather",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Necropolis Lord's Shackles",
                        slot: "wrist",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Lichbone Legguards",
                        slot: "legs",
                        type: "mail",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Ritual Commander's Ring",
                        slot: "finger",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Siphoning Phylactery Shard",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: ["healer"],
                    },
                ],
            },
        ],
    },
    {
        name: "Theater of Pain",
        bosses: [
            {
                name: "An Affront of Challengers",
                loot: [
                    {
                        name: "Dessia's Decimating Decapitator",
                        slot: "both hands",
                        type: "two-handed axe",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Amphitheater Stalker's Hood",
                        slot: "head",
                        type: "mail",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Plague-Licked Amice",
                        slot: "shoulder",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Vest of Concealed Secrets",
                        slot: "chest",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Galvanized Oxxein Legguards",
                        slot: "legs",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Bloodoath Signet",
                        slot: "finger",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Vial of Spectral Essence",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: ["healer"],
                    },
                ],
            },
            {
                name: "Gorechop",
                loot: [
                    {
                        name: "Abdominal Securing Chestguard",
                        slot: "chest",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Contaminated Gauze Wristwraps",
                        slot: "wrist",
                        type: "cloth",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Grips of Overwhelming Beatings",
                        slot: "hands",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Fleshfused Circle",
                        slot: "finger",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Viscera of Coalesced Hatred",
                        slot: "trinket",
                        stat: ["strength"],
                        effectSuitableFor: ["tank"],
                    },
                ],
            },
            {
                name: "Xav the Unfallen",
                loot: [
                    {
                        name: "Xav's Pike of Authority",
                        slot: "both hands",
                        type: "polearm",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Fleshcrafter's Knife",
                        slot: "one hand",
                        type: "dagger",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Gorebound Predator's Gavel",
                        slot: "one hand",
                        type: "one-handed mace",
                        primaryStat: ["agility"],
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Gorestained Cleaver",
                        slot: "one hand",
                        type: "one-handed axe",
                        primaryStat: ["strength"],
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Triumphant Combatant's Chainmail",
                        slot: "chest",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Pit Fighter's Wristguards",
                        slot: "wrist",
                        type: "plate",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fearless Challenger's Leggings",
                        slot: "legs",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                ],
            },
            {
                name: "Kul'tharok",
                loot: [
                    {
                        name: "Soulswen Vestments",
                        slot: "chest",
                        type: "cloth",
                        mainSecondaryStat: "Mastery",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Girdle of Shattered Dreams",
                        slot: "waist",
                        type: "leather",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Boots of Shuddering Matter",
                        slot: "feet",
                        type: "mail",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Haste",
                    },
                    {
                        name: "Ritual Bone Band",
                        slot: "finger",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Soulletting Ruby",
                        slot: "trinket",
                        stat: ["intellect"],
                        effectSuitableFor: "all",
                    },
                ],
            },
            {
                name: "Mordretha, the Endless Empress",
                loot: [
                    {
                        name: "Barricade of the Endless Empire",
                        slot: "off hand",
                        type: "shield",
                        primaryStat: ["intellect", "strength"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Deathwalker's Promise",
                        slot: "off hand",
                        type: "off-hand",
                        primaryStat: ["intellect"],
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Versatility",
                    },
                    {
                        name: "Unyielding Combatant's Pauldrons",
                        slot: "shoulder",
                        type: "plate",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Fallen Empress's Cord",
                        slot: "waist",
                        type: "cloth",
                        mainSecondaryStat: "Versatility",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Vanquished Usurper's Footpads",
                        slot: "feet",
                        type: "leather",
                        mainSecondaryStat: "Haste",
                        otherSecondaryStat: "Critical Strike",
                    },
                    {
                        name: "Ring of Perpetual Conflict",
                        slot: "finger",
                        mainSecondaryStat: "Critical Strike",
                        otherSecondaryStat: "Mastery",
                    },
                    {
                        name: "Grim Codex",
                        slot: "trinket",
                        stat: ["agility", "strength"],
                        effectSuitableFor: ["dps", "tank"],
                    },
                ],
            },
        ],
    },
];

interface Specialization {
    name: string;
    primaryStat: PrimaryStat;
    usableWeapons: WeaponType[];
    weaponSlots: WeaponSlot[][];
    role: Role;
}
type WowClassName = "warrior" | "paladin" | "hunter" | "rogue" | "priest" | "shaman" | "mage" | "warlock" | "monk" | "druid" | "demon hunter" | "death knight";
interface WowClass {
    name: WowClassName;
    usableArmor: ArmorType;
    specializations: Specialization[];
}

const classes: WowClass[] = [
    {
        name: "warrior",
        usableArmor: "plate",
        specializations: [
            {
                name: "fury",
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword", "polearm"],
                role: "dps",
                weaponSlots: [
                    ["one hand", "one hand"],
                    ["both hands", "one hand"],
                    ["both hands", "both hands"],
                ],
            },
            {
                name: "arms",
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword", "polearm"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            {
                name: "protection",
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"]],
            },
        ],
    },
    {
        name: "paladin",
        usableArmor: "plate",
        specializations: [
            {
                name: "holy",
                primaryStat: "intellect",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"]],
            },
            {
                name: "protection",
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "shield"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"]],
            },
            {
                name: "retribution",
                primaryStat: "strength",
                usableWeapons: ["two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
        ],
    },
    {
        name: "hunter",
        usableArmor: "mail",
        specializations: [
            {
                name: "marksmanship",
                primaryStat: "agility",
                usableWeapons: ["ranged"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            {
                name: "beast mastery",
                primaryStat: "agility",
                usableWeapons: ["ranged"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            {
                name: "survival",
                primaryStat: "agility",
                usableWeapons: ["polearm"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
        ],
    },
    {
        name: "rogue",
        usableArmor: "leather",
        specializations: [
            {
                name: "sublety",
                primaryStat: "agility",
                usableWeapons: ["dagger"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            {
                name: "assassination",
                primaryStat: "agility",
                usableWeapons: ["dagger"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            {
                name: "outlaw",
                primaryStat: "agility",
                usableWeapons: ["one-handed sword", "one-handed axe", "one-handed mace"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
        ],
    },
    {
        name: "priest",
        usableArmor: "cloth",
        specializations: [
            {
                name: "holy",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "discipline",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "shadow",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed mace", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "shaman",
        usableArmor: "mail",
        specializations: [
            {
                name: "restoration",
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "shield", "staff"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "enhancement",
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            {
                name: "elemental",
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "shield", "staff"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "mage",
        usableArmor: "cloth",
        specializations: [
            {
                name: "fire",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "frost",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "arcane",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "warlock",
        usableArmor: "cloth",
        specializations: [
            {
                name: "affliction",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "destruction",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "demonology",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "one-handed sword", "staff", "wand", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "monk",
        usableArmor: "leather",
        specializations: [
            {
                name: "brewmaster",
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "tank",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
            {
                name: "windwalker",
                primaryStat: "agility",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
            {
                name: "mistweaver",
                primaryStat: "intellect",
                usableWeapons: ["fist weapon", "one-handed axe", "one-handed mace", "one-handed sword", "polearm", "staff"],
                role: "healer",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "druid",
        usableArmor: "leather",
        specializations: [
            {
                name: "restoration",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "healer",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "guardian",
                primaryStat: "agility",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "tank",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "feral",
                primaryStat: "agility",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
            {
                name: "balance",
                primaryStat: "intellect",
                usableWeapons: ["dagger", "fist weapon", "one-handed mace", "two-handed mace", "staff", "off-hand"],
                role: "dps",
                weaponSlots: [["one hand", "off hand"], ["both hands"]],
            },
        ],
    },
    {
        name: "demon hunter",
        usableArmor: "leather",
        specializations: [
            {
                name: "havoc",
                primaryStat: "agility",
                usableWeapons: ["warglaive", "fist weapon", "one-handed axe", "one-handed sword"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"]],
            },
            {
                name: "vengeance",
                primaryStat: "agility",
                usableWeapons: ["warglaive", "fist weapon", "one-handed axe", "one-handed sword"],
                role: "tank",
                weaponSlots: [["one hand", "one hand"]],
            },
        ],
    },
    {
        name: "death knight",
        usableArmor: "plate",
        specializations: [
            {
                name: "blood",
                primaryStat: "strength",
                usableWeapons: ["polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "tank",
                weaponSlots: [["both hands"]],
            },
            {
                name: "unholy",
                primaryStat: "strength",
                usableWeapons: ["polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["both hands"]],
            },
            {
                name: "frost",
                primaryStat: "strength",
                usableWeapons: ["one-handed axe", "one-handed mace", "one-handed sword", "polearm", "two-handed axe", "two-handed mace", "two-handed sword"],
                role: "dps",
                weaponSlots: [["one hand", "one hand"], ["both hands"]],
            },
        ],
    },
];

const mythicPlusEndOfDungeonIlvl = [187, 190, 194, 194, 197, 200, 200, 200, 207, 207, 207, 207, 207, 210];
