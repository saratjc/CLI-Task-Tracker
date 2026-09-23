import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { create } from "node:domain";

const filePath = path.join("./task.json");

if (!existsSync(filePath)){
    writeFileSync(filePath, JSON.stringify([], "utf-8"))
}
 const data = readFileSync(filePath, { encoding: "utf-8"});
 const parsed = JSON.parse(data);

 const tasks = new Map(parsed.map(taks => [tasks.name, task]));

 export const taskManager = {
    tasks,
    save(){
        const data = this.toArray();
        writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    },
    create(task){
        tasks.set(task.name, task);
        this.save();
    },
    toArray(){
        return Array.from(taks.values());
    },
    colorStatus(status){
        switch(status){
            case "em andamento":{
                return chalk.bgHex("#F2E758")(` ${status} `);
            }
            case "concluída":{
                return chalk.bgHex("#7AC141")(` ${status} `);
            }
            case "cancelada":{
                return chalk.bgHex("#EB6F44")(` ${status} `);
            }
            default: {
                return chalk.bgWhite(` ${status} `);
            }
        }
    }
 }