// The 'Command' interface
interface Command {
    execute(): void;
}

// The 'ConcreteCommand' class
class TurnLightOn implements Command {
    public lightSource: Light;
    public constructor(lightSource: Light) {
        this.lightSource = lightSource;
    }

    public execute(): void {
        this.lightSource.turnLightOn();
    }
}

// The 'Receiver' class
class Light {
    public turnLightOn(): string {
        return 'Light is on!';
    }

    public turnLightOff(): string {
        return 'Light is off!';
    }
}

// The 'Invoker' class
class RemoteControl {
    public commandList: Command[];
    public constructor() {
        this.commandList = [];
    }

    public pushCommand(command: Command): void {
        this.commandList.push(command);
    }

    public runCommands(): void {
        let i: number;
        let len: number;
        for (i = 0, len = this.commandList.length; i < len; ++i) {
            console.log(this.commandList[i].execute());
        }
    }
}

// Entry point
const remoteControlInvoker = new RemoteControl();
const turnLightOnCommand = new TurnLightOn(new Light());

remoteControlInvoker.pushCommand(turnLightOnCommand);
remoteControlInvoker.runCommands();