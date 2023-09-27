export abstract class Character {
 
    private _name: string = ""
    private _level: number = 0
    private _xpoints: number = 0
    private _maxHealth: number = 50
    private _currentHealth: number = 50
    private _force: number = 10
    private _speed: number = 10
    private _intel: number = 10
    private _mana: number = 50
    private _crithit: number = 0.02

    constructor(nom : string) {
        this.name = nom
        this.level = 0
        this.xpoints = 0
        this.maxHealth = 50
        this.currentHealth = this.maxHealth 
        this.force =  10
        this.speed =  10
        this.intel =  10
        this.mana =  50
        this.crithit = 0.02
    }

    abstract TriggerBeforeAttack(target: Character): any
    
    abstract TriggerAttack(target: Character, attack_result : number) : any

    abstract TriggerAfterAttack(target: Character) : any
    
    BeforeAttack(target: Character) {
        this.TriggerBeforeAttack(target);
    }
    
    ClassicalAttack(): number {
        let dommage: number = this._force;

        if(Math.random() < this._crithit) {
            dommage *= 2
        }
        return dommage;
    }

    Attack(target: Character) : number{
        let attack_result = this.ClassicalAttack()
        target.currentHealth -= attack_result;
        this.TriggerAttack(target, attack_result)

        return attack_result;
    }

    AfterAttack(target: Character) {
        this.TriggerAfterAttack(target);
    }

    Heal(regainHP: number) {
        if (regainHP + this.currentHealth > this.maxHealth) {
            this.currentHealth = this.maxHealth
        } else { 
            this.currentHealth += regainHP
        }
    }
    
    AbsorbMana(manaleech: number) {
        this.mana += manaleech;
    }

    levelUp(): any { 
        //TODO  
    }

    isDead(): boolean {
        return this.currentHealth <= 0;

    }
 /* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////
        
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }
    
    public get level(): number {
        return this._level
    }

    public set level(value: number) {
        this._level = value
    }
    
    public get xpoints(): number {
        return this._xpoints
    }

    public set xpoints(value: number) {
        this._xpoints = value
    }

    public get maxHealth(): number {
        return this._maxHealth
    }

    public set maxHealth(value: number) {
        this._maxHealth = value
    }
    
    public get currentHealth(): number {
        return this._currentHealth
    }

    public set currentHealth(value: number) {
        this._currentHealth = value
        if (this.currentHealth < 0)
            this.currentHealth = 0
    }
    
    public get force(): number {
        return this._force
    }

    public set force(value: number) {
        this._force = value
    }

    public get speed(): number {
        return this._speed
    }

    public set speed(value: number) {
        this._speed = value
    }

    public get intel(): number {
        return this._intel
    }

    public set intel(value: number) {
        this._intel = value
    }

    public get mana(): number {
        return this._mana
    }

    public set mana(value: number) {
        this._mana = value
    }

    public get crithit(): number {
        return this._crithit
    }

    public set crithit(value: number) {
        this._crithit = value
    }
}
