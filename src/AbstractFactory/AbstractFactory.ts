// The 'AbstractFactory' abstract class
abstract class WorkersFactory {
    public abstract createBuilder(): SpecificWorker;
    public abstract createWaiter(): SpecificWorker;
}

// The 'AbstractProduct' abstract class
abstract class SpecificWorker {
    public abstract getGreeting(): string;
}

// The 'ConcreteFactory' class
class AmericanWorkersFactory extends WorkersFactory {
    public createBuilder(): SpecificWorker {
        return new AmericanBuilder();
    }

    public createWaiter(): SpecificWorker {
        return new AmericanWaiter();
    }
}

// The 'Product' class
class AmericanBuilder extends SpecificWorker {
    getGreeting(): string {
        return 'Hello, sunshine! How are you? Oh, your rays are already making my day brighter!';
    }
}

// The 'Product' class
class AmericanWaiter extends SpecificWorker {
    getGreeting(): string {
        return 'Aloha princess!';
    }
}

// class JapanWorkersFactory {}

// The 'Client' class
class WorkersGreetings {
    public workersFactory: WorkersFactory;

    public constructor(workersFactory: WorkersFactory) {
        this.workersFactory = workersFactory;
    }

    public getGreetings(): void {
        console.log(this.workersFactory.createBuilder().getGreeting());
        console.log(this.workersFactory.createWaiter().getGreeting());
    }
}

// Entry point
const americanWorkersFactory = new AmericanWorkersFactory();
const workersGreetings = new WorkersGreetings(americanWorkersFactory);
workersGreetings.getGreetings();