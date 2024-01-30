class App
{
    runApplication()
    {
     
        console.log("Hello world!");
    }
}

class Greet
{
    constructor()
    {
        this.greeting = "Greetings!"
    }
    
    showGreeting()
    {
        console.log("greeting van binnen: " + this.greeting);
    }
}

class Goodbye
{
    constructor()
    {
        this.goodbye = "bye bye"
    }
    
    showGreeting()
    {
        console.log("bye bye van binnen: " + this.goodbye);
    }
}



let greet = new Greet();
let bye = new Goodbye();

greet.showGreeting();
bye.showGreeting();

greet.showGreeting();
bye.showGreeting();

greet.showGreeting();
bye.showGreeting();

console.log("greetings van buiten: " + greet.greeting)

console.log("bye bye van buiten: " + bye.goodbye)

let app = new App();
app.runApplication();