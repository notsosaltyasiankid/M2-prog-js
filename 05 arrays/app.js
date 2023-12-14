class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let arr = ["Kenderick lamar", "MF DOOM", "Bbno$"]
        console.log(arr)

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(i + ": "+ element)
        }
        let nummers = [2,5,7]
        console.log(nummers)
        for (let i = 0; i < nummers.length; i++) {  
            const element = nummers[i];
            console.log(1 + element)
        }
    }
}
let app = new App();
app.runApplication();