// The 'AbstractProduct' interface
interface Door {
    getDescription(): void;
}

// The 'Product' class
class WoodenDoor implements Door {
    public constructor() {}

    public getDescription(): void {
        console.log('I am a wooden door');
    }
}

// The 'Product' class
class GlassDoor implements Door {
    public constructor() {}

    public getDescription(): void {
        console.log('I am a glass door');
    }
}

// The 'AbstractProduct' interface
interface DoorFittingExpert {
    getDescription(): void;
}

// The 'Product' class
class Carpenter implements DoorFittingExpert {
    public constructor() {}

    public getDescription(): void {
        console.log('I can only fit wooden doors');
    }
}

// The 'Product' class
class Glazier implements DoorFittingExpert {
    public constructor() {}

    public getDescription(): void {
        console.log('I can only fit glass doors');
    }
}

// The 'AbstractFactory' interface
interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
}

// The 'ConcreteFctory' class
class WoodenFactory implements DoorFactory {
    public constructor() {}

    public makeDoor(): Door {
        return new WoodenDoor();
    }

    public makeFittingExpert(): DoorFittingExpert {
        return new Carpenter();
    }
}

// The 'ConcreteFctory' class
class GlassFactory implements DoorFactory {
    public constructor() {}

    public makeDoor(): Door {
        return new GlassDoor();
    }

    public makeFittingExpert(): DoorFittingExpert {
        return new Glazier();
    }
}

// Example

var woodenFactory = new WoodenFactory();
var door = woodenFactory.makeDoor();
var expert = woodenFactory.makeFittingExpert();
door.getDescription();
expert.getDescription();

var glassFactory = new GlassFactory();
var door = glassFactory.makeDoor();
var expert = glassFactory.makeFittingExpert();
door.getDescription();
expert.getDescription();