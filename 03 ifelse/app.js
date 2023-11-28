class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let title= document.getElementById("newstitle")
        const newsitem1= document.getElementsByClassName("gamesnews")[0];
        const newsitem2= document.getElementsByClassName("gamesnews")[1];
        console.log(title);
        console.log(newsitem1);
        console.log(newsitem2); 
        let random = Math.random();//0-1
        console.log(random);
        if(random <= 0.2)
        {
            title.style.backgroundColor = "#FF0000";
            newsitem1.style.backgroundColor = "#067C48";
            newsitem2.style.backgroundColor = "#71F10D";
        }
        else if(random > 0.75)
        {
            title.style.backgroundColor = "#228BCC"; 
            newsitem1.style.backgroundColor = "#022020";
            newsitem2.style.backgroundColor = "#C50505";
        }
        else if(random > 0.2 && random < 0.6)
        {   
            title.style.backgroundColor = "#22CC68";
            newsitem1.style.backgroundColor = "#58F6F9";
            newsitem2.style.backgroundColor = "#7909F9";  
        }
        
        else if(random > 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#DA9707";
            newsitem1.style.backgroundColor = "#B00DF1";
            newsitem2.style.backgroundColor = "#F90976";
        }
    }
}
let app = new App();
app.runApplication();