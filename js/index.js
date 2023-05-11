// Mostran primeiro o modal para obter os dados do usuário
let dialogo = document.querySelector("dialog")
document.body.onload = () => {

    dialogo.showModal()
}

// Capturando elementos
let inputNomeUsuario = document.getElementById('nomeUsuario')
let inputSalarioUsuario = document.getElementById('salarioUsuario')
let btnModalNome = document.getElementById('btnModalNome')
let btnModalSalario = document.getElementById('btnModalSalario')
let btnModalNovaConta = document.getElementById('btnModalNovaConta')
let modalNome = document.getElementById('perguntaNome')
let modalSalario = document.getElementById('perguntaSalario')
let modalAddConta = document.getElementById('novaConta')
let modalExcluirConta = document.getElementById('excluirConta')
let btnModalExcluirConta = document.getElementById('btnModalExcluirConta')
let btnModalCancelarExclusao = document.getElementById('btnModalCancelarExclusao')
let modalConfirmarExclusao = document.getElementById('confirmarExclusao')
let h1ConfirmarExclusao = document.getElementById('h1ConfirmarExclusao')
let btnModalConfirmarExclusao = document.getElementById('btnModaConfirmarExclusao')




// Variaveis do usuario
let nomeUsuario;
let salarioUsuario;

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

    // capturando elementos
    let saudacao = document.getElementById('saudacao')
    let elementoSalario = document.getElementById('valorSalario')

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

// Função para renderizar as dividas
let containerContasApagar = document.getElementById('containerContasApagar')
function renderizaDividas() {
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
            <button class="pagarConta">Pagar</button>
        </div>
        `
    });
}

// Funçao para percorrer o array e obter o total das dividas
let somaTotalDividas;
function totalDividas() {
    somaTotalDividas = 0;
    dividas.forEach(conta => {
        somaTotalDividas += Number(conta.valor)
    })
}

// Função para chamar o modal de exclusao de conta
function excluirConta() {
    modalAddConta.setAttribute('hidden', true)
    modalExcluirConta.removeAttribute('hidden')
    dialogo.showModal()
}


btnModalNovaConta.addEventListener('click', (event) => {
    //event.preventDefault()
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
    let elementoDividas = document.getElementById('valorDividas')
    elementoDividas.innerText = `${somaTotalDividas}`
    console.log(somaTotalDividas)

    // Caulculando o que sobra do Salario e atribuindo ao elemento sobras
    let elementoSobras = document.getElementById('valorSobras')
    elementoSobras.innerText = salarioUsuario - somaTotalDividas

    // Chamando a função que renderiza as dividas
    renderizaDividas()

    // fechando o modal
    dialogo.close()
})

// Variavel de index para ecluir
let indexParaExcluir;
btnModalExcluirConta.addEventListener('click', (event) => {
    event.preventDefault()

    // capturando id da conta a ser excluida
    indexParaExcluir = document.getElementById('idParaExcluir').value - 1

    // Verificando se a conta existe
    if (indexParaExcluir + 1 > dividas.length) {
        alert("Conta não encontrada!")
    } else {
        // Mudando para o modal de confirmação
        modalExcluirConta.setAttribute('hidden', true)
        modalConfirmarExclusao.removeAttribute('hidden')
        h1ConfirmarExclusao.innerText = `Deseja excluir a conta "${dividas[indexParaExcluir].titulo}"?`
    }
})

btnModalConfirmarExclusao.addEventListener('click', (event) => {
    event.preventDefault()
    //Excluindo
    dividas.splice(indexParaExcluir, 1)

    // Chamando a função que renderiza as dividas
    renderizaDividas()

    // fechando o modal
    dialogo.close()

    // ocultando o modal de confirmação de  exclusao
    modalConfirmarExclusao.setAttribute('hidden', true)

})

btnModalCancelarExclusao.addEventListener('click', (event) => {
    event.preventDefault()
    alert('Funcionou')
})




