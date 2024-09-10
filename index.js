const start = () => {
    
    while(true){
        let opcao = "Sair"
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "Sair":
                console.log("Saindo")
                return
        }
    }
}

start()
