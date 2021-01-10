class Character {
    public readonly wowClass: WowClass;
    public readonly spec: Specialization;

    constructor(
        public readonly name: string,
        wowClassName: WowClassName,
        specName: string,
        public readonly items: {
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
    ) {
        const possibleClass = classes.find((thisClass) => thisClass.name === wowClassName);
        if (!possibleClass) {
            throw new Error(`Undefined class: ${wowClassName}`);
        }
        this.wowClass = possibleClass;

        const possibleSpec = this.wowClass.specializations.find((spec) => spec.name === specName);
        if (!possibleSpec) {
            throw new Error(`Undefined spec: ${specName}`);
        }
        this.spec = possibleSpec;
    }

    public getIlvl() {
        const allIlvls = Object.values(this.items)
            .flat()
            .map((item) => item.ilvl);

        if (this.items.weapon.length === 1) {
            allIlvls.push(allIlvls[allIlvls.length - 1]);
        }

        const avgIlvl = allIlvls.reduce((prev, curr) => prev + curr, 0) / allIlvls.length;

        return avgIlvl;
    }

    public canUseItem(item: Item): boolean {
        switch (item.slot) {
            case "neck":
            case "finger":
            case "back":
                return true;
            case "chest":
            case "feet":
            case "legs":
            case "waist":
            case "wrist":
            case "hands":
            case "shoulder":
            case "head":
                return item.type === this.wowClass.usableArmor;
            case "one hand":
            case "off hand":
            case "both hands":
                return item.primaryStat.indexOf(this.spec.primaryStat) !== -1 && this.spec.usableWeapons.indexOf(item.type) !== -1;
            case "trinket":
                return (
                    (typeof item.stat !== "object" || item.stat.indexOf(this.spec.primaryStat) !== -1) &&
                    (item.effectSuitableFor === "all" ||
                        (typeof item.effectSuitableFor === "object" && item.effectSuitableFor.indexOf(this.spec.role) !== -1) ||
                        item.effectSuitableFor === this.spec.primaryStat)
                );
            default:
                throw new Error("Unexpected item in bagging area");
        }
    }
}

const anixa = new Character("Anixa", "shaman", "restoration", {
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
            ilvl: 194,
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

const characters = [anixa];
