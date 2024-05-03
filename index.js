#! /usr/bin/env node
import inquirer from "inquirer";
class student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class friend {
    nam;
    constructor(z) {
        this.nam = z;
    }
}
class person {
    students = [];
    friends = [];
    addStd(obj) {
        this.students.push(obj);
    }
    addfri(fd) {
        this.friends.push(fd);
    }
}
let outCome = new person();
const start = async (per) => {
    console.log("You are welcome");
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "an",
            message: "Who would you like to talk ?",
            choices: ["Friends", "Students"]
        });
        if (ans.an == "Friends") {
            let fri = await inquirer.prompt({
                type: "input",
                name: "f",
                message: "By which friend do you want to talk ?"
            });
            const fri1 = per.friends.find(x => x.nam == fri.f);
            if (!fri1) {
                const ff = new friend(fri.f);
                per.addfri(ff);
                console.log(`Hello i am ${ff.nam}`);
                console.log(per.friends);
            }
            if (fri1) {
                console.log(`Hello i am your ${fri1.nam}`);
                console.log(per.friends);
            }
        }
        if (ans.an == "Students") {
            let std = await inquirer.prompt({
                type: "input",
                name: "s",
                message: "By which student do you want to talk ?"
            });
            const std1 = per.students.find(val => val.name == std.s);
            if (!std1) {
                const n = new student(std.s);
                per.addStd(n);
                console.log(`Hello sir, i am your student ${n.name}`);
                console.log(per.students);
            }
            if (std1) {
                console.log(`Hello sir, i am your student ${std1.name}`);
                console.log(per.students);
            }
        }
    } while (true);
};
start(outCome);
