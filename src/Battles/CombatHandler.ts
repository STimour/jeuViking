import { Character } from "../Character/Character";

export class CombatHandler { 

    private _perso1: Character
    private _perso2: Character

    private _fighterStatus: Character[] = [];
    // fighterStatus[0] sera toujours l'attaquant
    // fighterStatus[1] sera toujours le defenseur


    constructor(p1: Character, p2: Character) { 
        this._perso1 = p1;
        this._perso2 = p2;
    }

    Fight() { 
        //this.perso1.onFightBeginning()//À implémenter TP J2
        //this.perso2.onFightBeginning()//À implémenter TP J2
        while (!this.perso1.isDead() && !this.perso2.isDead()) {
            this.OneTurn();
        }
        //this.perso1.onFightEnding()//À implémenter TP J2
        //this.perso2.onFightEnding()//À implémenter TP J2

    }

    OneTurn() {
        let initiative: Character[] = []

        if (this.perso1.speed > this.perso2.speed)
            initiative = [this.perso1, this.perso2]
        else
            initiative = [this.perso2, this.perso1]

        this.fighterStatus = [initiative[0], initiative[1]]
        this.playTurn()
        this.fighterStatus = [initiative[1], initiative[0]]
        this.playTurn()
        
    }

    playTurn() {
        console.log(this.fighterStatus[0].name + " se prépare à attaquer son adversaire " + this.fighterStatus[1].name)
        this.fighterStatus[0].BeforeAttack(this.fighterStatus[1]);

        this.fighterStatus[0].Attack(this.fighterStatus[1]);

        this.fighterStatus[0].AfterAttack(this.fighterStatus[1]);
        console.log(this.fighterStatus[1].name + " est à " + this.fighterStatus[1].currentHealth + " point de vie. " + this.fighterStatus[1].isDead());

        //this.fighterStatus[1].OnHit(this.fighterStatus[0]);

        if (this.fighterStatus[1].isDead()) { 
            console.log(this.fighterStatus[1].name + " est mort !")
            console.log(this.fighterStatus[0].name + " s'en sort vainqueur !")
            //this.fighterStatus[0].getXppoint(this.fighterStatus[1].level);//TODO 
            //this.fighterStatus[0].fullHeal();//TODO 
        }
    }



    public get perso1(): Character {
        return this._perso1
    }
    public set perso1(value: Character) {
        this._perso1 = value
    }
    public get perso2(): Character {
        return this._perso2
    }
    public set perso2(value: Character) {
        this._perso2 = value
    }

    public get fighterStatus(): Character[] {
        return this._fighterStatus;
    }
    public set fighterStatus(value: Character[]) {
        this._fighterStatus = value;
    }
}