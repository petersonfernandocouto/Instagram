let nomeperfil = document.getElementById("profileID");

function clicar(){
     var icon = document.getElementById('cliqueicon');
    var currentColor = icon.style.color;

    if (currentColor === 'red') {
        icon.style.color = 'white';
    } else {
        icon.style.color = 'red';
    }
};

function clicar2(){
    var icon = document.getElementById('cliqueicon2');
    var currentColor = icon.style.color;

    if (currentColor === 'red') {
        icon.style.color = 'white';
    } else {
        icon.style.color = 'red';
    }
};

function clicar3(){

    var icon = document.getElementById('cliqueicon3');
    var currentColor = icon.style.color;

    if (currentColor === 'red') {
        icon.style.color = 'white';
    } else {
        icon.style.color = 'red';
    }
};

function clicar4()
{
    var icon = document.getElementById('cliqueicon4');
    var currentColor = icon.style.color;

    if (currentColor === 'red') {
        icon.style.color = 'white';
    } else {
        icon.style.color = 'red';
    }
};

// acima ok



var urlAtual = window.location.href;


if (urlAtual.endsWith("welcome.html")) {
    var pp = prompt('Informe seu nome');
    

    if (pp === null || pp === "") {
    
        nomeperfil.innerHTML = "Convidado";
    } else {
   
        nomeperfil.innerHTML = pp;
    }
}

function public(){

    
    let comentarioFixado = document.getElementById("pinnedComment");
    let digcomentario = document.getElementById("typeComment");

    comentarioFixado.innerHTML = "Eu:"+ digcomentario.value +"."

    digcomentario.value = "";


};

function public2(){

    
    let comentarioFixado2 = document.getElementById("pinnedComment2");
    let digcomentario2 = document.getElementById("typeComment2");

    comentarioFixado2.innerHTML = "Eu:"+ digcomentario2.value +"."

    digcomentario2.value = "";


}

function public3(){

    
    let comentarioFixado3 = document.getElementById("pinnedComment3");
    let digcomentario3 = document.getElementById("typeComment3");

    comentarioFixado3.innerHTML = "Eu:"+ digcomentario3.value +"."

    digcomentario3.value = "";


}

function public4(){

    
    let comentarioFixado4 = document.getElementById("pinnedComment4");
    let digcomentario4 = document.getElementById("typeComment4");

    comentarioFixado4.innerHTML = "Eu:"+ digcomentario4.value +"."

    digcomentario4.value = "";


}






