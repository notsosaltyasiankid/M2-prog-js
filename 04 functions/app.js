function superMooieGlobalFunction()
{
console.log("ik ben globaal");
console.log("dus je mag mij overal aanroepen");
}
superMooieGlobalFunction();
superMooieGlobalFunction();
class App
{
    runApplication()
    {
        console.log("Hello world!");
        superMooieGlobalFunction();
    }
}
let app = new App();
app.runApplication();