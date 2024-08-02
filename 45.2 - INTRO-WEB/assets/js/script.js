let usuario = document.querySelector('.usuario')
let senha = document.querySelector('.senha')
let email = document.querySelector('.email')
let usuarioOk = false
let emailOk = false
let senhaOk = false

function validarUsuario(){
    let txtUsuario = document.querySelector('#txtUsuario')
    if(usuario.value.length < 3){
        txtUsuario.innerHTML = "Nome inválido, deve conter ao menos 3 letras"
        txtUsuario.style.color = "red"  
    }else{
        txtUsuario.innerHTML = "Nome válido"
        txtUsuario.style.color = "green"
        usuarioOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
   if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = "E-mail inválido"
    txtEmail.style.color = "red"
   }else{
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = "green"
    emailOk = true
   }
}

function validarSenha(){
    let txtSenha = document.querySelector('#txtSenha')
    if(senha.value.length < 5){
        txtSenha.innerHTML = "Senha inválida, deve conter ao menos 5 caracteres"
        txtSenha.style.color = "red"  
    }else{
        txtSenha.innerHTML = "Senha válida"
        txtSenha.style.color = "green"
        senhaOk = true
    }
}

function enviar(){
    if (usuarioOk == true && emailOk == true && senhaOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}