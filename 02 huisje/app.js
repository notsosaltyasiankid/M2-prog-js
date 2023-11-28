class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");
        g.beginPath();
        g.moveTo(300,100);
        g.lineTo(300,700);
        g.lineTo(700,300);
        g.closePath();
        g.fill();
        console.log(canvas)
    }
}
let app = new App();
app.runApplication()