function getDungeonLootTable(name: DungeonName): Item[] {
    return dungeons
        .find((dungeon) => dungeon.name === name)!
        .bosses.map((boss) => boss.loot)
        .flat();
}

const mainDiv = document.getElementById("main") as HTMLDivElement;

function render() {
    mainDiv.innerHTML = "";

    const charactersDiv = document.createElement("div");
    characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.innerText = `${character.name} - ${character.spec.name} ${character.wowClass.name}`;

        charactersDiv.appendChild(characterDiv);
    });
    mainDiv.appendChild(charactersDiv);
    mainDiv.appendChild(document.createElement("hr"));

    const gearPiecesInfoSpan = document.createElement("span");
    gearPiecesInfoSpan.innerText = "Pieces of gear: ";
    const gearPiecesSlider = document.createElement("input");
    const gearPiecesSpan = document.createElement("span");
    gearPiecesSlider.type = "range";
    gearPiecesSlider.min = "1";
    gearPiecesSlider.max = "3";
    gearPiecesSlider.value = "1";
    gearPiecesSpan.innerText = "1";

    const mythicPlusLevelInfoSpan = document.createElement("span");
    mythicPlusLevelInfoSpan.innerText = "Mythic+ Level: ";
    const mythicPlusLevelSlider = document.createElement("input");
    const mythicPlusIlvlSpan = document.createElement("span");
    mythicPlusLevelSlider.type = "range";
    mythicPlusLevelSlider.min = "2";
    mythicPlusLevelSlider.max = "15";
    mythicPlusLevelSlider.value = "2";
    mythicPlusIlvlSpan.innerText = "2 - " + mythicPlusEndOfDungeonIlvl[0].toString();

    const dungeonsDiv = document.createElement("div");
    function renderDungeons() {
        dungeonsDiv.innerHTML = "";

        const newItemIlvl = mythicPlusEndOfDungeonIlvl[parseInt(mythicPlusLevelSlider.value) - 2];

        const dungeonInfo = dungeons.map((dungeon) => {
            const data: { name: string; total: number; ilvls: { name: string; upgrade: number }[] } = {
                name: dungeon.name,
                total: 0,
                ilvls: [],
            };
            const lootTable = getDungeonLootTable(dungeon.name);
            characters.forEach((character) => {
                const ilvlUpgrades = lootTable
                    .filter((item) => character.canUseItem(item))
                    .map((item) => {
                        switch (item.slot) {
                            case "trinket":
                                return Math.max(0, newItemIlvl - Math.min(character.items.trinket[0].ilvl, character.items.trinket[1].ilvl));
                            case "finger":
                                return Math.max(0, newItemIlvl - Math.min(character.items.finger[0].ilvl, character.items.finger[1].ilvl));
                            case "off hand":
                            case "one hand":
                            case "both hands":
                                const currentIlvl = character.items.weapon.reduce((prev, curr) => prev + curr.ilvl, 0);
                                const possibleIlvlUpgrades = character.spec.weaponSlots
                                    .filter((combination) => combination.includes(item.slot))
                                    .map((combination) => {
                                        const newWeaponCombination: number[] = [];
                                        const usedWeaponYet = false;
                                        combination.forEach((slot, index) => {
                                            if (!usedWeaponYet && slot === item.slot) {
                                                newWeaponCombination[index] = newItemIlvl;
                                            } else {
                                                // Need to use an item from current loadout
                                                const possibleWeaponsToUse = character.items.weapon
                                                    .filter((weapon) => weapon.slot === slot)
                                                    .map((weapon) => weapon.ilvl);
                                                if (possibleWeaponsToUse.length > 0) {
                                                    newWeaponCombination[index] = Math.max(...possibleWeaponsToUse);
                                                } else {
                                                    newWeaponCombination[index] = -1;
                                                }
                                            }
                                        });
                                        return newWeaponCombination.includes(-1)
                                            ? 0
                                            : newWeaponCombination.reduce((prev, curr) => prev + curr, 0) * (2 / newWeaponCombination.length);
                                    });
                                possibleIlvlUpgrades.sort((a, b) => b - a);
                                return Math.max(0, possibleIlvlUpgrades[0] - currentIlvl);
                            default:
                                return Math.max(0, newItemIlvl - character.items[item.slot].ilvl);
                        }
                    });
                const averageUpgrade =
                    ((ilvlUpgrades.reduce((curr, prev) => curr + prev, 0) / ilvlUpgrades.length) * (parseInt(gearPiecesSlider.value) / 5)) / 16;
                data.total += averageUpgrade;
                data.ilvls.push({ name: character.name, upgrade: averageUpgrade });
            });
            return data;
        });
        dungeonInfo.sort((a, b) => {
            return b.total - a.total;
        });
        dungeonInfo.forEach((info) => {
            const dungeonDiv = document.createElement("div");
            dungeonDiv.innerText = info.name + ": " + info.total.toFixed(2);

            info.ilvls.forEach((ilvl) => {
                const characterDiv = document.createElement("div");
                characterDiv.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + ilvl.name + " - " + ilvl.upgrade.toFixed(2);
                dungeonDiv.appendChild(characterDiv);
            });

            dungeonsDiv.appendChild(dungeonDiv);
        });
        dungeonsDiv.appendChild(document.createElement("br"));
    }

    gearPiecesSlider.oninput = () => {
        gearPiecesSpan.innerText = gearPiecesSlider.value;
        renderDungeons();
    };
    mythicPlusLevelSlider.oninput = () => {
        mythicPlusIlvlSpan.innerText = mythicPlusLevelSlider.value + " - " + mythicPlusEndOfDungeonIlvl[parseInt(mythicPlusLevelSlider.value) - 2].toString();
        renderDungeons();
    };

    mainDiv.appendChild(gearPiecesInfoSpan);
    mainDiv.appendChild(gearPiecesSlider);
    mainDiv.appendChild(gearPiecesSpan);

    mainDiv.appendChild(document.createElement("br"));

    mainDiv.appendChild(mythicPlusLevelInfoSpan);
    mainDiv.appendChild(mythicPlusLevelSlider);
    mainDiv.appendChild(mythicPlusIlvlSpan);

    mainDiv.appendChild(document.createElement("hr"));

    mainDiv.appendChild(dungeonsDiv);

    renderDungeons();
}

render();
