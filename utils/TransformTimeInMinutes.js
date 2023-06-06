class TransformTimeInMinutes{
    transformStringTimeInMinutes(time){
        // Quebrando a string em partes
        const parts = time.split(":");

        // Obtendo as horas, minutos e segundos
        const hours = parseInt(partes[0])
        const minute = parseInt(partes[1])
        const seconds = parseInt(partes[2])

        // Convertendo tudo para minutos
        return ((hours * 60) + minute + (seconds / 60))
    }
}

module.exports = TransformTimeInMinutes