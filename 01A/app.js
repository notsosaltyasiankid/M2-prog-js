class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let appnaam = "appnaam: demoapp"
        let versienummer = "versienummer: " + 0.1
        let versiedatum = "versiedatum: Thu Feb 02 2023 12:05:51 GMT+0100 (central European Standerd  time)"
        let auther = "auther: Alex Bons"
        let copyright = "copyright: Bonsers"
        let distributeur = "distributeur: A W Y S"
        let darkmode = "darkmode: " + false
        console.log(appnaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(auther)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}
let app = new App();
app.runApplication();