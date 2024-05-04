import inquirer from "inquirer"

class Player{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }

    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }

}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}


let player = await inquirer.prompt([
    {
         name: "name",
         type: "input",
         message: "please Enter your Name"
    }

    
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Skeleton") {
       let ask = await inquirer.prompt([
           {
            name: "opt",
            type: "list",
            message: "what would you like to do?",
            choices: ["Attack", "Drink portion", "Run For your Life"]
           }
       ]) 
       if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel <= 0){
                console.log("you Loose, Better Luck Next Time")
                process.exit()
                
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel <= 0){
                console.log("you win")
                process.exit()
                
            }

        }

       }
       if(ask.opt == "Drink portion"){
          p1.fuelIncrease()
          console.log(`you Drink Health portion your Fuel is ${p1.fuel}`);
       }
       if(ask.pot == "Run For your Life.."){
        console.log("you Loose, Better Luck Next Time")
        process.exit()

    }
}   

}


while(true)