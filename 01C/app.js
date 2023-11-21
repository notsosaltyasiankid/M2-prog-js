class App
{
    runApplication()
    {
        let boolean = false
        let string = "test"
        let number = 1000
        this.boolean2 = true
        this.string2 = "werkt"
        this.number2 = 10
        this.greeting = "starting up"
        let appnaam = "demoapp"
        let versienummer = 0.1
        let versiedatum = "Thu Feb 02 2023 12:05:51 GMT+0100 (central European Standerd  time)"
        let auther = "Alex Bons"
        let copyright = "Bonsers"
        let distributeur = "A W Y S"
        let darkmode = false
        console.log(boolean)
        console.log(string)
        console.log(number)
        console.log(app.greeting)
        console.log("appnaam: " + appnaam)
        console.log("versienummer: " + versienummer)
        console.log("versiedatum: " + versiedatum)
        console.log("auther: " + auther)
        console.log("copyright: " + copyright)
        console.log("distributeur: " + distributeur)
        console.log("darkmode: " + darkmode)
    
    }
}
let app = new App();
app.runApplication();
console.log(app.boolean2)
console.log(app.string2)
console.log(app.number2)