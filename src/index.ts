import { DungeonName, dungeons, Item, Specialization, WowClass } from "./data";

function canUseItem(whichClass: WowClass, whichSpec: Specialization, item: Item): boolean {
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
            return item.type === whichClass.usableArmor;
        case "one hand":
        case "off hand":
        case "both hands":
            return item.primaryStat.indexOf(whichSpec.primaryStat) !== -1 && whichSpec.usableWeapons.indexOf(item.type) !== -1;
        case "trinket":
            return (
                (typeof item.stat !== "object" || item.stat.indexOf(whichSpec.primaryStat) !== -1) &&
                (item.effectSuitableFor === "all" ||
                    (typeof item.effectSuitableFor === "object" && item.effectSuitableFor.indexOf(whichSpec.role) !== -1) ||
                    item.effectSuitableFor === whichSpec.primaryStat)
            );
        default:
            throw new Error("Unexpected item in bagging area");
    }
}

function getDungeonLootTable(name: DungeonName): Item[] {
    return dungeons
        .find((dungeon) => dungeon.name === name)!
        .bosses.map((boss) => boss.loot)
        .flat();
}
