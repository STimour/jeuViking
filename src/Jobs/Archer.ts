import { Character } from "../Character/Character";
import { Job } from "./Job";

export class Archer extends Job{

    constructor(
        jobName : string = "Archer",
        bonusHealth : number = 15, // pv bonus de Base 
        bonusForce : number = 2,
        bonusSpeed : number = 3,
        bonusIntel : number = 1,
        bonusManaPx : number = 10,
        bonusCritHit : number = 0.05,
    ){ 
        super(jobName, bonusHealth, bonusForce, bonusSpeed, bonusIntel, bonusManaPx, bonusCritHit)
    }

    SpecialBeforeAttackCapacity(char: Character, target: Character) {
        throw new Error("Method not implemented.");
    }
    SpecialAttackCapacity(char: Character, target: Character, attack_result: any) {
        throw new Error("Method not implemented.");
    }
    SpecialAfterAttackCapacity(char: Character, target: Character) {
        throw new Error("Method not implemented.");
    }

}