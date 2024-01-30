class Dino {
    constructor(naam, Vleeseter, Leeftijd) {
        this.naam = naam;
        this.Vleeseter = Vleeseter;
        this.Leeftijd = Number(Leeftijd);
        this.leeft = true;
        this.honger = true;
    }

    eatFood(FoodToEat) {
        FoodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger: " + this.honger);
        console.log("ik eet nu: " + FoodToEat.naam);
    }
}

class App {
    runApplication() {
        console.log("hello world");
        let dino = new Dino("T-Rex", true, 20);
        let planteter = new Dino("Trice", true, 20);
        let plant = new Plant("gras", "struik");
        console.log(dino);
        console.log(planteter);
        console.log("de leeftijd van deze " + dino.naam + " is:" + dino.Leeftijd);
        console.log("en deze " + dino.naam + " eet vlees:" + dino.Vleeseter);
        dino.eatFood(plant);
        console.log("leeft " + planteter.naam + "? " + plant.leeft);
    }
}

class Plant {
    constructor(naam, Leeftijd) {
        this.naam = naam;
        this.Leeftijd = Number(Leeftijd);
    }
}

let app = new App();
app.runApplication();