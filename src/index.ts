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
}

render();
