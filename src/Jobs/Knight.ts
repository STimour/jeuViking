import { Character } from "../Character/Character";
import { Job } from "./Job";

export class Knight extends Job{

    constructor(
        jobName : string = "Chevalier",
        bonusHealth : number = 40,
        bonusForce : number = 5,
        bonusSpeed : number = 1,
        bonusIntel : number = 1,
        bonusManaPx : number = 5,
        bonusCritHit : number = 0.03,
    ){ 
        super(jobName, bonusHealth, bonusForce, bonusSpeed, bonusIntel, bonusManaPx, bonusCritHit)
    }
}