function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let Hetresultaat = heeftEenResultaat();
console.log(Hetresultaat);
console.log(heeftEenResultaat());

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2)

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3)

function ax2bcWiskund2(u,h,l)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY
}

let logY1 = ax2bcWiskund2(9,8,15)
console.log(logY1);

let logY2 = ax2bcWiskund2(10,65,100)
console.log(logY2)

let logY3 = ax2bcWiskund2(5,1,1000)
console.log(logY3)

function argumentsAreHandy(shoutout)
{
console.log("do you want to giva a shoutout");
console.log(shoutout);
}

function superMooieGlobalFunction()
{
console.log("ik ben globaal");
console.log("dus je mag mij overal aanroepen");
}
class App
{
    runApplication()
    {
        console.log("Hello world!");
        
    }
}
let app = new App();
app.runApplication();