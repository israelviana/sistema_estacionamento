class TransformTimeInMinutes{
    transformStringTimeInMinutes(time){
        // Quebrando a string em partes
        var partes = time.split(":")

        // Obtendo as horas, minutos e segundos
        var horas = parseInt(partes[0])
        var minutos = parseInt(partes[1])
        var segundos = parseInt(partes[2])

        // Convertendo tudo para minutos
        return ((horas * 60) + minutos + (segundos / 60))
    }
}

module.exports = TransformTimeInMinutes