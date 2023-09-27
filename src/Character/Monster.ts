import { Character } from "./Character";
import { MonsterFamily } from "./MonsterFamily";

class Monster extends Character{
    private _monsterfam: MonsterFamily;
    
    constructor(monsterfam: MonsterFamily) { 
        super("test_Name")
        this._monsterfam = monsterfam 
    }

    TriggerBeforeAttack(target: Character) {
        throw new Error("Method not implemented.");
    }

    TriggerAttack(target: Character, attack_result: number) {
        throw new Error("Method not implemented.");
    }

    TriggerAfterAttack(target: Character) {
        throw new Error("Method not implemented.");
    } 

    public get monsterfam(): MonsterFamily {
        return this._monsterfam;
    }

    public set monsterfam(value: MonsterFamily) {
        this._monsterfam = value;
    }


}