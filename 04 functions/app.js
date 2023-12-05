class App
{
    runApplication()
    {
        console.log("Hello world!");
        
    }
    newclassfunction()
    {   
        console.log("hello world in de nieuweClassfunction")
    }
    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }
}
let app = new App();
app.runApplication();
app.newclassfunction();
app.anotherFunctionWithArguments("mijn argument is iets...");