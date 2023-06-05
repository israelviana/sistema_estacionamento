const readlineSync = require("readline-sync");
const Carro = require('./Carro.js')
const Time = require('./utils/Time')
const TransformTimeInMinutos = require('./utils/TransformTimeInMinutes')
const VerifyObject = require('./utils/VerifyExistsObjectInArray')

const paraiba_regex = require('./regex/paraiba-regex')
const pernambuco_regex = require('./regex/pernambuco-regex')
const rio_grande_norte_regex = require('./regex/rio_grande_norte_regex')
const InitializeProgram = require("./InitializeProgram");

class Estacionamento {

    constructor() {
        this.tamanhoEstacionamento = 20
        this.vagasLivres = this.tamanhoEstacionamento
        this.arrayCarrosEstacionados = []
        this.arrayCarrosEstacionadosRemovidos = []
        this.conta = 0
    }

    adicionarCarro(){
        if(this.vagasLivres > 0) {
            const verifyObject = new VerifyObject()
            let placaCarro = readlineSync.question('Digite a placa do carro:\n')
            if(!verifyObject.verifyExistsObjectInArray(this.arrayCarrosEstacionados, "placa", placaCarro)){
                let timeNow = new Time()
                //adiciona o carro no estacionamento
                let novoCarro = new Carro(placaCarro, this.getLocal(placaCarro), timeNow.timeNowWithHoursMinutesSeconds())
                this.arrayCarrosEstacionados.push(novoCarro)
                //diminui a quantidade de vagas livres
                this.vagasLivres--
                console.log(this.arrayCarrosEstacionados, "\nQUANTIDADE DE VAGAS LIVRES: ", this.vagasLivres)
            }else{
                console.log("CARRO JÁ ADICIONADO!")
            }
        }else{
            console.log("ESTACIONAMENTO LOTADO!")
        }
    }

    removerCarro() {
        let timeNow = new Time()
        let placaCarro = readlineSync.question('Digite a placa do carro que quer retirar:\n')
        //pesquisa pela placa digitada
        let carroEncontrado = this.arrayCarrosEstacionados.find(carro => carro.placa === placaCarro);
        //adiciona a hora de saida
        carroEncontrado.horarioSaiu = timeNow.timeNowWithHoursMinutesSeconds()
        //diminui o tamanho de vagas livres
        this.vagasLivres--
        //retira do array de carros estacionados
        this.arrayCarrosEstacionados.pop(carroEncontrado)
        //adiciona no array de carros removidos
        this.arrayCarrosEstacionadosRemovidos.push(carroEncontrado)
        console.log(this.arrayCarrosEstacionados)
    }

    contaDoCarro() {
        const transformTime = new TransformTimeInMinutos()
        let placaCarro = readlineSync.question('Digite a placa do carro:\n')
        const carroEncontrado = this.arrayCarrosEstacionadosRemovidos.find(carro => carro.placa === placaCarro)
        const tempoMinutos = transformTime.transformStringTimeInMinutes(carroEncontrado.horarioSaiu) - transformTime.transformStringTimeInMinutes(carroEncontrado.horarioChegou)
        if(tempoMinutos < 15) {
            carroEncontrado.conta = 0
        } else {
            const tempo = Math.ceil(tempoMinutos)
            const valorConta = 0.25 * tempo
            carroEncontrado.conta = valorConta
        }
        console.log("VALOR TOTAL: ", carroEncontrado.conta)
    }

    quantidadeDeEstacionados(){
        console.log("VAGAS OCUPADAS: ",(this.tamanhoEstacionamento - this.vagasLivres))
    }

    quantidadeDeVagas(){
        console.log("CAPACIDADE TOTAL: ", this.tamanhoEstacionamento)
    }

    quantidadeDeVagasLivres(){
        console.log("VAGAS LIVRES: ", this.vagasLivres)
    }

    getLocal(placa) {
        for (let prop in paraiba_regex) {
            if (paraiba_regex[prop].test(placa)) {
                return 'Paraiba'
            }
        }

        for (let prop in pernambuco_regex) {
            if (pernambuco_regex[prop].test(placa)) {
                return 'Pernambuco'
            }
        }

        for (let prop in rio_grande_norte_regex) {
            if (rio_grande_norte_regex[prop].test(placa)) {
                return 'Rio Grande do Norte'
            }
        }

        return "Local não cadastrado"
    }
}

module.exports = Estacionamento