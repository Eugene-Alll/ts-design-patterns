// A 'ConcretePrototype' class
class Elk {
    protected _sex: string;
    protected _subspecies: string;

    public constructor(sex: string, subspecies: string = 'Tule') {
        this._sex = sex;
        this._subspecies = subspecies;
    }

    public setSex(sex: string): void {
        this._sex = sex;
    }

    public getSex(): string {
        return this._sex;
    }

    public setSubspecies(subspecies: string): void {
        this._subspecies = subspecies;
    }

    public getSubspecies(): string {
        return this._subspecies;
    }
}

var theOriginalElk = new Elk('male');
console.log(theOriginalElk.getSex());
console.log(theOriginalElk.getSubspecies());

var clonedElk = Object.create(theOriginalElk);
clonedElk.setSex('female');
console.log(clonedElk.getSex());
console.log(clonedElk.getSubspecies());