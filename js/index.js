// Mostran primeiro o modal para obter os dados do usuário
let dialogo = document.querySelector("dialog")
document.body.onload = () => {
    dialogo.showModal()
}


let inputNomeUsuario = document.getElementById('nomeUsuario')
let inputSalarioUsuario = document.getElementById('salarioUsuario')
let btnModalNome = document.getElementById('btnModalNome')
let btnModalSalario = document.getElementById('btnModalSalario')
let modalNome = document.getElementById('perguntaNome')
let modalSalario = document.getElementById('perguntaSalario')
let nomeUsuario;
let salarioUsuario;

btnModalNome.addEventListener('click', (event) =>{
    event.preventDefault()
    // Guardando nome do usuário
    nomeUsuario = inputNomeUsuario.value
    // Mudando pergunta do modal
    modalNome.setAttribute('hidden', true)
    modalSalario.removeAttribute('hidden')
})

btnModalSalario.addEventListener('click', (event) =>{
    event.preventDefault()
    // Guardando o salário do usuário
    salarioUsuario = inputSalarioUsuario.value
    
    // ocultando o modal
    dialogo.close()

    // capturando elementos
    let saudacao = document.getElementById('saudacao')
    let elementoSalario = document.getElementById('valorSalario')
    
    // Adicionando os valores as variáveis
    saudacao.innerText = `Bem vindo, ${nomeUsuario}!`
    elementoSalario.innerText = salarioUsuario
})



