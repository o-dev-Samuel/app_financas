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
let btnModalNovaConta = document.getElementById('btnModalNovaConta')
let modalNome = document.getElementById('perguntaNome')
let modalSalario = document.getElementById('perguntaSalario')
let modalAddConta = document.getElementById('novaConta')
let containerContasApagar = document.getElementById('containerContasApagar')
let containerContasPagas = document.getElementById('containerContasPagas')
let modalExcluirConta = document.getElementById('excluirConta')
let btnModalExcluirConta = document.getElementById('btnModalExcluirConta')
let btnModalCancelarExclusao = document.getElementById('btnModalCancelarExclusao')
let modalConfirmarExclusao = document.getElementById('confirmarExclusao')
let h1ConfirmarExclusao = document.getElementById('h1ConfirmarExclusao')
let btnModalConfirmarExclusao = document.getElementById('btnModaConfirmarExclusao')
let btnModalCancelarConfirmacaoExclusao = document.getElementById('btnModalCancelarConfirmacaoExclusao')
let modalPagarConta = document.getElementById('modalPagarConta')
let btnModalPagarConta = document.getElementById('btnModalPagarConta')
let btnModalCancelarPagamento = document.getElementById('btnModalCancelarPagamento')
let modalConfirmarPagamento = document.getElementById('confirmarPagamento')
let h1ConfirmarPagamento = document.getElementById('h1ConfirmarPagamento')
let btnModalConfirmarPagamento = document.getElementById('btnModalConfirmarPagamento')
let btnModalCancelarConfirmacaoPagamento = document.getElementById('btnModalCancelarConfirmacaoPagamento')




// Variaveis do usuario
let nomeUsuario;
let salarioUsuario;
let elementoDividas = document.getElementById('valorDividas')
let elementoSobras = document.getElementById('valorSobras')

btnModalNome.addEventListener('click', (event) => {
    event.preventDefault()
    // Guardando nome do usuário
    nomeUsuario = inputNomeUsuario.value
    // Mudando pergunta do modal
    modalNome.setAttribute('hidden', true)
    modalSalario.removeAttribute('hidden')
})

btnModalSalario.addEventListener('click', (event) => {
    event.preventDefault()
    // Guardando o salário do usuário
    salarioUsuario = inputSalarioUsuario.value

    // ocultando o modal
    dialogo.close()

    // Adicionando os valores as variáveis
    saudacao.innerText = `Bem vindo(a), ${nomeUsuario}!`
    elementoSalario.innerText = salarioUsuario
})

// Botã para adicionar contas
let btnAddConta = document.getElementById('btnAddConta')
btnAddConta.addEventListener('click', () => {
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
            <p>valor:$${conta.valor}</p>
            <p>vencimento:${conta.vencimento}</p>
            <button class="excluirConta"  onclick="excluirConta()">Excluir</button>
            <button class="pagarConta" onclick="pagarConta()">Pagar</button>
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
                <button class="excluirConta"  onclick="excluirConta()">Excluir</button>
            </div>
        </div>
        `
    })
}

// Funçao para percorrer o array e obter o total das dividas
let somaTotalDividas;
function totalDividas() {
    somaTotalDividas = 0;
    dividas.forEach(conta => {
        somaTotalDividas += Number(conta.valor)
    })
    elementoDividas.innerText = `${somaTotalDividas}`
}

// Função para chamar o modal de exclusao de conta
function excluirConta() {
    // Fechando o modal de adiocionar conta
    modalAddConta.setAttribute('hidden', true)

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


btnModalNovaConta.addEventListener('click', () => {
    // Capturando elementos e atribuindo valor as variaveis
    let tituloNovaConta = document.getElementById('tituloNovaConta').value
    let valorNovaConta = document.getElementById('valorNovaConta').value
    let vencimentoNovaConta = document.getElementById('vencimentoNovaConta').value

    // Crinado obj da conta
    let novaConta = new Conta(tituloNovaConta, valorNovaConta, vencimentoNovaConta)

    // Adicionando a conta ao array de dividas
    dividas.push(novaConta)

    // Percorrendo o array de dividas e adicionando o valor a variavel somaTotalDividas
    totalDividas();

    // Caulculando o que sobra do Salario e atribuindo ao elemento sobras
    elementoSobras.innerText = salarioUsuario - somaTotalDividas

    // Chamando a função que renderiza as dividas
    renderizarContas()

    // fechando o modal
    dialogo.close()
})

// Variavel de index para excluir
let indexParaExcluir;
btnModalExcluirConta.addEventListener('click', () => {
    // capturando id da conta a ser excluida
    indexParaExcluir = document.getElementById('idParaExcluir').value - 1

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

    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarExclusao.setAttribute('hidden', true)

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
    indexParaPagar = document.getElementById('idParaPagar').value - 1

    // Verificando se a conta existe
    if (indexParaPagar + 1 > dividas.length || indexParaPagar + 1 < 1) {
        alert(indexParaPagar)
        alert('Conta não encontrada!')
    } else {

        modalPagarConta.setAttribute('hidden', true)
        modalConfirmarPagamento.removeAttribute('hidden')
        h1ConfirmarPagamento.innerText = `Deseja pagar a conta "${dividas[indexParaPagar].titulo}"`

    }
})

btnModalConfirmarPagamento.addEventListener('click', () => {
    // Abatendo o valor da divida no salario
    salarioUsuario -= dividas[indexParaPagar].valor
    elementoSalario.innerText = salarioUsuario
    // Criando nova conta paga
    let novaContaPaga = new ContaPaga(dividas[indexParaPagar].titulo, dividas[indexParaPagar].valor)

    // Adicionando a conta ao array de contas pagas
    dividasPagas.push(novaContaPaga)

    //Excluindo das contas a pagar
    dividas.splice(indexParaPagar, 1)

    // Renderizando as contas
    renderizarContasPagas()
    renderizarContas()

    // atualizando o total de dividas
    totalDividas()

    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarPagamento.setAttribute('hidden', true)

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




