const readlineSync = require("readline-sync");
const Estacionamento = require('./Estacionamento')

class InitializeProgram {
    constructor() {
        this.estacionamento = new Estacionamento()
    }

    initializeProgram() {
        const menu = "1 - ESTACIONAR CARRO\n2 - RETIRAR CARRO\n3 - CONTA DO CARRO\n4 - QUANTIDADE DE CARROS ESTACIONADOS\n5 - QUANTIDADE DE VAGAS\n6 - QUANTIDADE DE VAGAS LIVRES\n0 - FECHAR PROGRAMA"
        console.log(menu)
        const option = readlineSync.question('Deseja executar qual comando?\n');
        this.switchOption(option)
    }


    switchOption(optionSelected){
        switch (optionSelected) {
            case "0":
                return
            case "1":
                this.estacionamento.adicionarCarro()
                this.initializeProgram()
                break
            case "2":
                this.estacionamento.removerCarro()
                this.initializeProgram()
                break
            case "3":
                this.estacionamento.contaDoCarro()
                this.initializeProgram()
                break
            case "4":
                console.log("quantidade de estacionados")
                this.initializeProgram()
                break
            case "5":
                console.log("quantidade de vagas")
                this.initializeProgram()
                break
            case "6":
                console.log("vagas livres")
                this.initializeProgram()
                break
            default:
                this.initializeProgram()
                return
        }
    }
}

module.exports = InitializeProgram;