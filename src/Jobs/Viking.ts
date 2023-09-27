import { Character } from "../Character/Character";
import { Job } from "./Job";

export class Viking extends Job{


//À la création d'un personnage viking, il recoit un nom,
// +25 points de vie supplémentaires, +4 de force, +2 de vitesse,
//0 d'intelligence 0 points de mana et +8% de chance de coup critique.

    constructor(
        jobName : string = "Viking",
        bonusHealth : number = 25, // pv bonus de Base 
        bonusForce : number = 4,
        bonusSpeed : number = 2,
        bonusIntel : number = 0,
        bonusManaPx : number = 0,
        bonusCritHit : number = 0.08,
    ){ 
        super(jobName, bonusHealth, bonusForce, bonusSpeed, bonusIntel, bonusManaPx, bonusCritHit)
    }

    SpecialAttackCapacity(char: Character, target: Character, attack_result : number) {
        let lifeleech = this.Lifeleech(attack_result);
        let manaleech = this.Manaleech(attack_result)
        char.Heal(lifeleech)
        char.AbsorbMana(manaleech)
    }
    
    Manaleech(attack_result: number): number {
        let manaleech: number = Math.ceil(attack_result * 0.03);
        console.log("Le coup de Hache absorbe l'energie mentale de l'adversaire, "+ manaleech + " points de mana sont volés")
        return manaleech;
    }
    
    Lifeleech(attack_result: number): number {
        let leech: number = Math.ceil(attack_result * 0.15);
        console.log("Le coup de Hache absorbe la vie de l'adversaire, "+ leech + " points de vie sont volés")
        return leech;
    }

    SpecialBeforeAttackCapacity(char: Character, target: Character) {  
        if (char.level >= 3) { //Going berserk ?
        }
    }
    
    SpecialAfterAttackCapacity(char: Character, target: Character) {  
        if (char.level >= 3) { 
            // stop berserk capacity
        }
      }
}