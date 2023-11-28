class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let title= document.getElementById("newstitle")
        const gamesnews= document.getElementsByClassName("gamesnews healine")
        const gamesnews2= document.getElementsByClassName("gamesnews")
        console.log(title.textContent)
        console.log(gamesnews[0].textContent)
        console.log(gamesnews2[1].textContent)
    }
}
let app = new App();
app.runApplication();