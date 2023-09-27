import { Character } from "../Character/Character"

export abstract class Job {
    
    private _jobName: string = ""
    private _bonusHealth: number = 0
    private _bonusForce: number = 0
    private _bonusSpeed: number = 0
    private _bonusIntel: number = 0
    private _bonusManaPx: number = 0
    private _bonusCritHit: number = 0

    constructor(jobname: string, bonusH: number, bonusF: number,
        bonusS: number, bonusI: number, bonusMpx: number, bonusCrit: number) {
        this.jobName = jobname;
        this.bonusHealth = bonusH;
        this.bonusForce = bonusF;
        this.bonusSpeed = bonusS;
        this.bonusIntel = bonusI;
        this.bonusManaPx = bonusMpx;
        this.bonusCritHit = bonusCrit; 
    }

    abstract SpecialBeforeAttackCapacity(char : Character, target: Character) : any
    
    abstract SpecialAttackCapacity(char: Character, target: Character, attack_result: any) : any
    
    abstract SpecialAfterAttackCapacity(char : Character, target: Character) : any
    
    public get jobName(): string {
        return this._jobName
    }
    public set jobName(value: string) {
        this._jobName = value
    }

    public get bonusHealth(): number {
        return this._bonusHealth
    }

    public set bonusHealth(value: number) {
        this._bonusHealth = value
    }

    public get bonusForce(): number {
        return this._bonusForce
    }

    public set bonusForce(value: number) {
        this._bonusForce = value
    }

    public get bonusSpeed(): number {
        return this._bonusSpeed
    }

    public set bonusSpeed(value: number) {
        this._bonusSpeed = value
    }

    public get bonusIntel(): number {
        return this._bonusIntel
    }

    public set bonusIntel(value: number) {
        this._bonusIntel = value
    }

    public get bonusManaPx(): number {
        return this._bonusManaPx
    }
    public set bonusManaPx(value: number) {
        this._bonusManaPx = value
    }

    public get bonusCritHit(): number {
        return this._bonusCritHit
    }

    public set bonusCritHit(value: number) {
        this._bonusCritHit = value
    }
}