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

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("bob dylan")
            arr.push("prince")
            console.log(i + ": "+ element)
        }

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("bob dylan")
            arr.push("prince")
            console.log(i + ": "+ element)
            let indexToRemove = arr.indexOf("bob dylan")
            let indexToRemove1 = arr.indexOf("prince")
            arr.splice(indexToRemove,1)
            arr.splice(indexToRemove1,5)
            arr.push("Tyler, the creator")
            arr.push("Kanye west")  
        }
    }
}
let app = new App();
app.runApplication();