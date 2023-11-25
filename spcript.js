
let sliderElemnt = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let novaSenha = "";

sizePassword.innerHTML = sliderElemnt.value;

sliderElemnt.oninput = function (){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
   
    let pass = "";

    for (let i =0, n = charset.length; i < sliderElemnt.value; ++i){
pass += charset.charAt(Math.floor(Math.random() *n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
