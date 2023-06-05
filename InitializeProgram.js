const readlineSync = require("readline-sync");
const Estacionamento = require('./Estacionamento')

class InitializeProgram {
    constructor() {
        this.estacionamento = new Estacionamento()
    }

    initializeProgram() {
        const menu = "1 - ESTACIONAR CARRO\n 2 - RETIRAR CARRO\n 3 - CONTA DO CARRO\n 4 - QUANTIDADE DE CARROS ESTACIONADOS\n 5 - QUANTIDADE DE VAGAS\n 6 - QUANTIDADE DE VAGAS LIVRES\n 0 - FECHAR PROGRAMA"
        console.log("-------------------------------------\n",menu,"\n-------------------------------------")
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
                this.estacionamento.quantidadeDeEstacionados()
                this.initializeProgram()
                break
            case "5":
                this.estacionamento.quantidadeDeVagas()
                this.initializeProgram()
                break
            case "6":
                this.estacionamento.quantidadeDeVagasLivres()
                this.initializeProgram()
                break
            default:
                this.initializeProgram()
                return
        }
    }
}

module.exports = InitializeProgram;