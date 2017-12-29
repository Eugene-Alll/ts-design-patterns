// A 'Product' class
class HappyMeal {
    protected _burger: boolean = false;
    protected _drink: boolean = false;
    protected _potato: boolean = false;
    protected _sauce: boolean = false;
    protected _toy: boolean = false;

    public constructor(builder: HappyMealBuilder) {
        this._burger = builder.burger;
        this._drink = builder.drink;
        this._potato = builder.potato;
        this._sauce = builder.sauce;
        this._toy = builder.toy;
    }
}

// A 'ConcreteBuilder' class 
class HappyMealBuilder {
    public burger: boolean = false;
    public drink: boolean = false;
    public potato: boolean = false;
    public sauce: boolean = false;
    public toy: boolean = false;

    public constructor() {}

    public addBurger(): this {
        this.burger = true;
        return this;
    }

    public addDrink(): this {
        this.drink = true;
        return this;
    }

    public addPotato(): this {
        this.potato = true;
        return this;
    }

    public addSauce(): this {
        this.sauce = true;
        return this;
    }

    public addToy(): this {
        this.toy = true;
        return this;
    }

    public build(): HappyMeal {
        return new HappyMeal(this);
    }
}

// Example

var happyMeal = new HappyMealBuilder()
                        .addBurger()
                        .addDrink()
                        .addPotato()
                        .addToy()
                        .build();