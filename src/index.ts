import { CombatHandler } from "./Battles/CombatHandler";
import { Character } from "./Character/Character";
import { Viking } from "./Jobs/Viking";

let toto = new Viking()

let Anthony = new Character("Anthony", toto);
let mechant = new Character("Le Vile-Brequin", toto)

console.log(Anthony)
console.log(mechant)

let FightManager = new CombatHandler(Anthony, mechant);

FightManager.OneTurn();

FightManager.Fight();
