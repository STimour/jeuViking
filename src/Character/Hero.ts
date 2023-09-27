import { Job } from "../Jobs/Job";
import { Character } from "./Character";

export class Hero extends Character {

    private _job?: Job

    constructor(nom: string, job: Job) {
        super(nom)
        this.job = job,
        this.maxHealth = 50 + this.job.bonusHealth
        this.currentHealth = this.maxHealth 
        this.force =  10 + this.job.bonusForce
        this.speed =  10 + this.job.bonusSpeed
        this.intel =  10 + this.job.bonusIntel
        this.mana =  50 + this.job.bonusManaPx
        this.crithit = 0.02 + this.job.bonusCritHit
    }

    TriggerBeforeAttack(target: Character) {
        this.job.SpecialBeforeAttackCapacity(this, target);
    }

    TriggerAttack(target: Character, attack_result : number) {
        this.job.SpecialAttackCapacity(this, target, attack_result);
    }
    
    TriggerAfterAttack(target: Character) {
        this.job.SpecialAfterAttackCapacity(this, target);
    }



/* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////

    public get job(): Job {
        return this._job!;
    }
    public set job(value: Job) {
        this._job = value;
    }
}