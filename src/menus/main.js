import { isCancel, outro, select } from "@clack/prompts";

export async function mainMenu(){

    const option = await select({
        message: "Escolha o que deseja fazer",
        options: [
            {label: "Criar nova tarefa", value: "create"},
            {label: "Listar tarefa", value: "list"},
            {label: "Sair", value: "end"},
        ]
    })

    if (isCancel(option)) return;
    
    switch(option){
        case "create":{

            return;
        }
        case "list":{

            return;
        }
        default: {
            outro("Fim do programa")
        }
    }
}