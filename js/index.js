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
    constructor(titulo, valor, vencimento, id) {
        this.titulo = titulo
        this.valor = valor
        this.vencimento = vencimento
        this.id = id
    }
}

// Função para renderizar as dividas
let containerContasApagar = document.getElementById('containerContasApagar')
function renderizaDividas() {
    // Limpando o container pra não repitir as contas
    containerContasApagar.innerHTML = ''
    dividas.forEach(conta => {
        containerContasApagar.innerHTML += `
        <div class="aPagar">
        <h2>${conta.titulo}</h2>
        <h3>ID:${conta.id}</h3>
        <div class="dadosConta">
            <p>valor:$${conta.valor}</p>
            <p>vencimento:${conta.vencimento}</p>
            <button class="excluirConta">Excluir</button>
            <button class="pagarConta">Pagar</button>
        </div>
        `
    });
}

// Funçao para percorrer o array e obter o total das dividas
let somaTotalDividas;
function totalDividas(){
    somaTotalDividas = 0;
    dividas.forEach(conta => {
        somaTotalDividas += Number(conta.valor)
    })
}


btnModalNovaConta.addEventListener('click', (event) => {
    //event.preventDefault()
    // Capturando elementos e atribuindo valor as variaveis
    let tituloNovaConta = document.getElementById('tituloNovaConta').value
    let valorNovaConta = document.getElementById('valorNovaConta').value
    let vencimentoNovaConta = document.getElementById('vencimentoNovaConta').value

    // Crinado obj da conta
    let novaConta = new Conta(tituloNovaConta, valorNovaConta, vencimentoNovaConta, dividas.length + 1)

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


