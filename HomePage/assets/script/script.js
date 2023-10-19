let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')

function verificarCampos(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Campo obrigatório!")
    }else{
        alert("Enviado com sucesso!")
    }
}