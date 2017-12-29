// The 'Product' interface
interface IInterviewer {
    askQuestions(): void;
}

// A 'ConcreteProduct' class
class Developer implements IInterviewer {
    public constructor() {}

    public askQuestions(): void {
        console.log('Asking about call, bind and apply');
    }
}

// A 'ConcreteProduct' class
class Designer implements IInterviewer {
    public constructor() {}

    public askQuestions(): void {
        console.log('Asking about grid layout');
    }
}

// The 'Creator' abstract class
abstract class HiringManager {

    // Factory method
    abstract makeInterviewer(): IInterviewer;

    public takeInterview(): void {
        var interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}

// A 'ConcreteCreator' class
class DevelopmentManager extends HiringManager {
    public constructor() {
        super();
    }

    // Factory method implementation
    public makeInterviewer(): IInterviewer {
        return new Developer();
    }
}

// A 'ConcreteCreator' class
class DesignerManager extends HiringManager {
    public constructor() {
        super();
    }

    // Factory method implementation
    public makeInterviewer(): IInterviewer {
        return new Designer();
    }
}

// Example

var developmentManager = new DevelopmentManager();
developmentManager.takeInterview();

var designerManager = new DesignerManager();
designerManager.takeInterview();