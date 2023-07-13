fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then((resultado) => {
        return resultado.json()
    })
    .then((moeda) => {
        console.log(moeda)
    })