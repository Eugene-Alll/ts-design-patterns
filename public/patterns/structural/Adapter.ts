// The 'Target' interface
interface Elephant {
    takeShower(): void;
}

class AfricanElephant implements Elephant {
    public constructor() {} 

    public takeShower(): void {}
}

class IndianElephant implements Elephant {
    public constructor() {}

    public takeShower(): void {}
}

class Hunter {
    public constructor() {}

    public hunt(elephant: Elephant): void {}
}

// The 'Adaptee' class
class WildDog {
    public constructor() {}

    public bark(): void {}
}

// The 'Adapter' class 
class WildDogAdapter implements Elephant {
    protected _dog: WildDog;

    public constructor(dog: WildDog) {
        this._dog = dog;
    }

    public takeShower(): void {
        this._dog.bark();
    }
}

// Example

var wildDog = new WildDog();
var wildDogAdapter = new WildDogAdapter(wildDog);

var hunter = new Hunter();
hunter.hunt(wildDogAdapter);