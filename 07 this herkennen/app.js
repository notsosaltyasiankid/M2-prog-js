class User {
    constructor(name) {
        this.name = name;
    }

    Wiebenik() {
        console.log(this.name);
    }
}


class App {
    runApplication() {
        console.log("hello world");
        let user1 = new User("A");
        let user2 = new User("B");
        let user3 = new User("C");
        let user4 = new User("D");
        let user5 = new User("E");
        let user6 = new User("F");

        let patches = new User("Patches the hyena");

        
user6.Wiebenik();
user5.Wiebenik();
user2.Wiebenik();
user3.Wiebenik();
user1.Wiebenik();
user4.Wiebenik();
user2.Wiebenik();
user3.Wiebenik();
user2.Wiebenik();

patches.Wiebenik(); 
    }
}

let app = new App();
app.runApplication();



user6.Wiebenik();
user5.Wiebenik();
user2.Wiebenik();
user3.Wiebenik();
user1.Wiebenik();
user4.Wiebenik();
user2.Wiebenik();
user3.Wiebenik();
user2.Wiebenik();

patches.Wiebenik(); 