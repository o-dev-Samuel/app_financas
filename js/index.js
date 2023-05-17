// Mostran primeiro o modal para obter os dados do usuário
let dialogo = document.querySelector("dialog")
document.body.onload = () => {

    dialogo.showModal()
}

// Capturando elementos
let inputNomeUsuario = document.getElementById('nomeUsuario')
let inputSalarioUsuario = document.getElementById('salarioUsuario')
let saudacao = document.getElementById('saudacao')
let elementoSalario = document.getElementById('valorSalario')
let btnModalNome = document.getElementById('btnModalNome')
let btnModalSalario = document.getElementById('btnModalSalario')
let btnAddConta = document.getElementById('btnAddConta')
let btnModalNovaConta = document.getElementById('btnModalNovaConta')
let inputTituloNovaConta = document.getElementById('tituloNovaConta')
let inputValorNovaConta = document.getElementById('valorNovaConta')
let inputDiaVenc = document.getElementById('diaVenc')
let inputMesVenc = document.getElementById('mesVenc')
let btnModalCancelarNovaConta = document.getElementById('btnModalCancelarNovaConta')
let modalNome = document.getElementById('perguntaNome')
let modalSalario = document.getElementById('perguntaSalario')
let modalAddConta = document.getElementById('novaConta')
let containerContasApagar = document.getElementById('containerContasApagar')
let containerContasPagas = document.getElementById('containerContasPagas')
let inpuIdParaExcluir = document.getElementById('idParaExcluir')
let modalExcluirConta = document.getElementById('excluirConta')
let btnModalExcluirConta = document.getElementById('btnModalExcluirConta')
let btnModalCancelarExclusao = document.getElementById('btnModalCancelarExclusao')
let modalConfirmarExclusao = document.getElementById('confirmarExclusao')
let h1ConfirmarExclusao = document.getElementById('h1ConfirmarExclusao')
let btnModalConfirmarExclusao = document.getElementById('btnModaConfirmarExclusao')
let btnModalCancelarConfirmacaoExclusao = document.getElementById('btnModalCancelarConfirmacaoExclusao')
let modalPagarConta = document.getElementById('modalPagarConta')
let inputIdParaPagar = document.getElementById('idParaPagar')
let btnModalPagarConta = document.getElementById('btnModalPagarConta')
let btnModalCancelarPagamento = document.getElementById('btnModalCancelarPagamento')
let modalConfirmarPagamento = document.getElementById('confirmarPagamento')
let h1ConfirmarPagamento = document.getElementById('h1ConfirmarPagamento')
let btnModalConfirmarPagamento = document.getElementById('btnModalConfirmarPagamento')
let btnModalCancelarConfirmacaoPagamento = document.getElementById('btnModalCancelarConfirmacaoPagamento')
let btnLimparContasPagas = document.getElementById('btnLimparContasPagas')
let modalConfirmarLimparContas = document.getElementById('modalConfirmarLimparContas')
let btnModalConfirmarLimparContasPagas = document.getElementById('btnModalConfirmarLimparContasPagas')
let btnModalCancelarLimparContas = document.getElementById('btnModalCancelarLimparContas')
let btnEditarSalario = document.getElementById('btnEditarSalario')
let dicaContasApagar = document.getElementById('dicaContasApagar')
let dicaContasPagas = document.getElementById('dicaContasPagas')
let modalContaPaga = document.getElementById('modalContaPaga')
let imgContaPaga = document.getElementById('imgContaPaga')
let btnModalContaPaga = document.getElementById('btnModalContaPaga')
let modalContaExcluida = document.getElementById('modalContaExcluida')
let btnModalContaExcluida = document.getElementById('btnModalContaExcluida')




// Variaveis do usuario
let nomeUsuario;
let salarioUsuario;
let elementoDividas = document.getElementById('valorDividas')
let elementoSobras = document.getElementById('valorSobras')

// Validações
// listener para interromper bug
inputNomeUsuario.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }

    if (inputNomeUsuario.value.length > 19 && event.code != "Backspace") {
        event.preventDefault()
    }
})
inputSalarioUsuario.addEventListener('keydown', (event) => {
    if (inputSalarioUsuario.value.length > 7 && event.code != "Backspace") {
        event.preventDefault()
    }
})
inputTituloNovaConta.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
    if (inputTituloNovaConta.value.length > 5 && event.code != "Backspace") {
        event.preventDefault()
    }
})
inputValorNovaConta.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
    if (inputValorNovaConta.value.length > 4 && event.code != "Backspace") {
        event.preventDefault()
    }
})
inputDiaVenc.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
    if (inputDiaVenc.value.length > 1 && event.code != "Backspace") {
        event.preventDefault()
    }
})
inpuIdParaExcluir.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
})
inputIdParaPagar.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
})
inputMesVenc.addEventListener('keydown', (event) => {
    if (event.code == "Enter") {
        event.preventDefault()
    }
    if (inputMesVenc.value.length > 1 && event.code != "Backspace") {
        event.preventDefault()
    }
})

//Validação do Nome Do Usuário
inputNomeUsuario.addEventListener('keyup', () => {
    if (inputNomeUsuario.value.length > 0) {
        btnModalNome.removeAttribute('disabled')
        btnModalNome.style.background = 'blueviolet'
        btnModalNome.style.color = '#fff'

    } else {
        btnModalNome.setAttribute('disabled', true)
        btnModalNome.style.background = 'rgb(73, 73, 73)'
        btnModalNome.style.color = 'rgb(105, 105, 105)'
    }
})

// Validações do Salário do Usuário
inputSalarioUsuario.addEventListener('keyup', () => {
    if (inputSalarioUsuario.value.length > 0) {
        btnModalSalario.removeAttribute('disabled')
        btnModalSalario.style.background = 'blueviolet'
        btnModalSalario.style.color = '#fff'
    } else {
        btnModalSalario.setAttribute('disabled', true)
        btnModalSalario.style.background = 'rgb(73, 73, 73)'
        btnModalSalario.style.color = 'rgb(105, 105, 105)'
    }
})

// Validação Adicionar Conta
let validarAddContaTitulo = false;
let validarAddContaValor = false;
let contaValidada = false;
inputTituloNovaConta.addEventListener('keyup', () => {
    // Validando campo titulo
    if (inputTituloNovaConta.value.length > 0) {
        validarAddContaTitulo = true
    } else {
        validarAddContaTitulo = false
    }

    // Validando se os dois campos estão validados
    if (validarAddContaTitulo && validarAddContaValor) {
        btnModalNovaConta.removeAttribute('disabled')
        btnModalNovaConta.style.background = 'blueviolet'
        btnModalNovaConta.style.color = '#fff'
    } else {
        btnModalNovaConta.setAttribute('disabled', true)
        btnModalNovaConta.style.background = 'rgb(73, 73, 73)'
        btnModalNovaConta.style.color = 'rgb(105, 105, 105)'
    }
})

inputValorNovaConta.addEventListener('keyup', () => {
    // Validando campo titulo
    if (inputValorNovaConta.value.length > 0) {
        validarAddContaValor = true
    } else {
        validarAddContaValor = false
    }

    // Validando se os dois campos estão validados
    if (validarAddContaTitulo && validarAddContaValor) {
        btnModalNovaConta.removeAttribute('disabled')
        btnModalNovaConta.style.background = 'blueviolet'
        btnModalNovaConta.style.color = '#fff'
    } else {
        btnModalNovaConta.setAttribute('disabled', true)
        btnModalNovaConta.style.background = 'rgb(73, 73, 73)'
        btnModalNovaConta.style.color = 'rgb(105, 105, 105)'
    }
})

btnModalNome.addEventListener('click', (event) => {
    event.preventDefault()
    // Guardando nome do usuário
    nomeUsuario = inputNomeUsuario.value
    // Mudando pergunta do modal
    modalNome.setAttribute('hidden', true)
    modalSalario.removeAttribute('hidden')
})

btnModalSalario.addEventListener('click', () => {
    // Guardando o salário do usuário
    salarioUsuario = inputSalarioUsuario.value

    // Caulculando o que sobra do Salario e atribuindo ao elemento sobras
    elementoSobras.innerText = `$${salarioUsuario - somaTotalDividas}`

    // ocultando o modal
    dialogo.close()

    // Adicionando os valores as variáveis
    saudacao.innerText = `Bem vindo(a), ${nomeUsuario}!`
    elementoSalario.innerText = `$${salarioUsuario}`

    // ociltando o modal de perguntar nome
    modalSalario.setAttribute('hidden', true)
})


btnAddConta.addEventListener('click', () => {
    // Desabilotando btn do Modal nova conta
    btnModalNovaConta.setAttribute('disabled', true)

    // ocultando form de salario do modal
    modalSalario.setAttribute('hidden', true)
    modalAddConta.removeAttribute('hidden')
    dialogo.showModal()
})

// Array para armazenar as dividas
let dividas = []
// Contrutor para as dividas
class Conta {
    constructor(titulo, valor, vencimento) {
        this.titulo = titulo
        this.valor = valor
        this.vencimento = vencimento
    }
}

// Array para armazenar as dividas pagas
let dividasPagas = []

// Construtor para as dividas
class ContaPaga {
    constructor(titulo, valor) {
        this.titulo = titulo
        this.valor = valor
    }
}

// Função para renderizar as contas
function renderizarContas() {
    // Limpando o container pra não repitir as contas
    containerContasApagar.innerHTML = ''
    let contadorId = 0;
    dividas.forEach(conta => {
        contadorId++
        containerContasApagar.innerHTML += `
        <div class="aPagar">
        <h2>${conta.titulo}</h2>
        <h3>ID:${contadorId}</h3>
        <div class="dadosConta">
            <p>valor: $${conta.valor}</p>
            <p>venc: ${conta.vencimento}</p>
            <div id="containerBtnConta">
                <button id="btnExcluirConta" class="btnConta" onclick="excluirConta()"></button>
                <button id="btnPagarConta" class="btnConta" onclick="pagarConta()"></button>
            </div>
        </div>
        `
    });
}

// Função para renderizar as contas pagas
function renderizarContasPagas() {
    // Limpando o container pra não repitir as contas
    containerContasPagas.innerHTML = ''

    dividasPagas.forEach(conta => {
        containerContasPagas.innerHTML += `
        <div class="pagas" >
            <h3>${conta.titulo}</h3>
            <div class="dadosConta">
                <p>$${conta.valor}</p>
            </div>
        </div>
        `
    })

    if (dividasPagas.length <= 0) {
        btnLimparContasPagas.setAttribute('hidden', true)
    } else {
        btnLimparContasPagas.removeAttribute('hidden')
    }

}

// Funçao para percorrer o array e obter o total das dividas
let somaTotalDividas = 0;
function totalDividas() {
    somaTotalDividas = 0;
    dividas.forEach(conta => {
        somaTotalDividas += Number(conta.valor)
    })
    elementoDividas.innerText = `$${somaTotalDividas}`
}

// Função para chamar o modal de exclusao de conta
function excluirConta() {
    modalExcluirConta.removeAttribute('hidden')
    dialogo.showModal()
}

// Função para chamar o modal de pagar conta
function pagarConta() {
    // Fechando o modal de adiocionar conta
    modalAddConta.setAttribute('hidden', true)

    modalPagarConta.removeAttribute('hidden')
    dialogo.showModal()
}

function limparContasPagas() {
    modalConfirmarLimparContas.removeAttribute('hidden')
    dialogo.showModal()
}


btnModalNovaConta.addEventListener('click', () => {
    // atribuindo valor as variaveis
    let tituloNovaConta = inputTituloNovaConta.value
    let valorNovaConta = inputValorNovaConta.value
    let vencimentoNovaConta = `${inputDiaVenc.value}/${inputMesVenc.value}`

    // Crinado obj da conta
    let novaConta = new Conta(tituloNovaConta, valorNovaConta, vencimentoNovaConta)

    // Adicionando a conta ao array de dividas
    dividas.push(novaConta)

    // Percorrendo o array de dividas e adicionando o valor a variavel somaTotalDividas
    totalDividas();

    // Caulculando o que sobra do Salario e atribuindo ao elemento sobras
    elementoSobras.innerText = `$${salarioUsuario - somaTotalDividas}`

    // Chamando a função que renderiza as dividas
    renderizarContas()

    // fechando o modal
    dialogo.close()

    // Fechando o modal de adiocionar conta
    modalAddConta.setAttribute('hidden', true)

    // Mudando a cor do btn
    btnModalNovaConta.style.background = 'rgb(73, 73, 73)'
    btnModalNovaConta.style.color = 'rgb(105, 105, 105)'

    // Resetando as validacoes do modal add conta
    validarAddContaTitulo = false
    validarAddContaValor = false

    // Ocultando a dica
    dicaContasApagar.setAttribute('hidden', true)


})

btnModalCancelarNovaConta.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // Fechando o modal de adiocionar conta
    modalAddConta.setAttribute('hidden', true)

    // Desabilotando btn do Modal nova conta
    btnModalNovaConta.setAttribute('disabled', true)

    // Mudando a cor do btn
    btnModalNovaConta.style.background = 'rgb(73, 73, 73)'
    btnModalNovaConta.style.color = 'rgb(105, 105, 105)'

    // Resetando as validacoes do modal add conta
    validarAddContaTitulo = false
    validarAddContaValor = false
})

// Variavel de index para excluir
let indexParaExcluir;
btnModalExcluirConta.addEventListener('click', () => {
    // capturando id da conta a ser excluida
    indexParaExcluir = inpuIdParaExcluir.value - 1

    // Verificando se a conta existe
    if (indexParaExcluir + 1 > dividas.length || indexParaExcluir + 1 < 1) {
        alert("Conta não encontrada!")
    } else {
        // Mudando para o modal de confirmação
        modalExcluirConta.setAttribute('hidden', true)
        modalConfirmarExclusao.removeAttribute('hidden')
        h1ConfirmarExclusao.innerText = `Deseja excluir a conta "${dividas[indexParaExcluir].titulo}"?`
    }
})

btnModalConfirmarExclusao.addEventListener('click', () => {
    //Excluindo
    dividas.splice(indexParaExcluir, 1)

    // Chamando a função que renderiza as dividas
    renderizarContas()

    // Se não houver dividas acione a dica
    if (dividas.length <= 0) {
        dicaContasApagar.removeAttribute('hidden')
    }

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarExclusao.setAttribute('hidden', true)

    // Chamando o prox modal
    modalContaExcluida.removeAttribute('hidden')

    // atualizando o total de dividas
    totalDividas()

    // Atualizando as sobras
    elementoSobras.innerText = salarioUsuario - somaTotalDividas

})

btnModalCancelarExclusao.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // ocultando o modal de exclusao
    modalExcluirConta.setAttribute('hidden', true)

})

btnModalCancelarConfirmacaoExclusao.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarExclusao.setAttribute('hidden', true)

})

// Variavel de index para Pagar
let indexParaPagar;
btnModalPagarConta.addEventListener('click', () => {
    indexParaPagar = inputIdParaPagar.value - 1

    // Verificando se a conta existe
    if (indexParaPagar + 1 > dividas.length || indexParaPagar + 1 < 1) {
        alert('Conta não encontrada!')
    } else {

        modalPagarConta.setAttribute('hidden', true)
        modalConfirmarPagamento.removeAttribute('hidden')
        h1ConfirmarPagamento.innerText = `Deseja pagar a conta "${dividas[indexParaPagar].titulo}"?`

    }
})

btnModalConfirmarPagamento.addEventListener('click', () => {
    // Abatendo o valor da divida no salario
    salarioUsuario -= `$${dividas[indexParaPagar].valor}`
    elementoSalario.innerText = salarioUsuario
    // Criando nova conta paga
    let novaContaPaga = new ContaPaga(dividas[indexParaPagar].titulo, dividas[indexParaPagar].valor)

    // Adicionando a conta ao array de contas pagas
    dividasPagas.push(novaContaPaga)

    //Excluindo das contas a pagar
    dividas.splice(indexParaPagar, 1)

    // ocultando a dica
    dicaContasPagas.setAttribute('hidden', true)

    // Se não houver dividas acione a dica
    if (dividas.length <= 0) {
        dicaContasApagar.removeAttribute('hidden')
    }

    // Renderizando as contas
    renderizarContasPagas()
    renderizarContas()

    // atualizando o total de dividas
    totalDividas()

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarPagamento.setAttribute('hidden', true)

    // Chamando o prox modal
    modalContaPaga.removeAttribute('hidden')

    // Atualizando as sobras
    elementoSobras.innerText = salarioUsuario - somaTotalDividas
})

btnModalCancelarPagamento.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // ocultando o modal de pagamento
    modalPagarConta.setAttribute('hidden', true)
})

btnModalCancelarConfirmacaoPagamento.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmar pagamento
    modalConfirmarPagamento.setAttribute('hidden', true)
})

btnModalConfirmarLimparContasPagas.addEventListener('click', () => {
    // Limpando o array de dividas Pagas
    dividasPagas = []

    // mostrando a dica
    dicaContasPagas.removeAttribute('hidden')

    // Renderizando
    renderizarContasPagas()

    // Fechando modal
    dialogo.close()

    // ocultando modal de confirmar limpesa das contas
    modalConfirmarLimparContas.setAttribute('hidden', true)
})

btnModalCancelarLimparContas.addEventListener('click', () => {
    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmar pagamento
    modalConfirmarLimparContas.setAttribute('hidden', true)
})

btnEditarSalario.addEventListener('click', () => {
    // desabilitando botao de confirmar salario
    btnModalSalario.setAttribute('disabled', true)

    // Mudando a cor do btn
    btnModalSalario.style.background = 'rgb(73, 73, 73)'
    btnModalSalario.style.color = 'rgb(105, 105, 105)'

    // Habilitando o modal de perguntar salario
    modalSalario.removeAttribute('hidden')

    dialogo.showModal()
})

btnModalContaPaga.addEventListener('click', ()=>{
    // Fechando Modal
    dialogo.close()

    // Ocultando pago
    modalContaPaga.setAttribute('hidden', true)
})

btnModalContaExcluida.addEventListener('click', ()=>{
    // Fechando Modal
    dialogo.close()

    // Ocultando pago
    modalContaExcluida.setAttribute('hidden', true)
})




