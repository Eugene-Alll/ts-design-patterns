// The 'Singleton' class
class Dictator {
    private static __instance: Dictator;
    private constructor() {}

    public static getInstance(): Dictator {
        if (!Dictator.__instance) {
            Dictator.__instance = new Dictator();
        }

        return Dictator.__instance;
    }
}

// Example

var firstDictator = Dictator.getInstance();
var secondDictator = Dictator.getInstance();
console.log(firstDictator === secondDictator);