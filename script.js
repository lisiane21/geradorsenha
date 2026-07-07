const senha=document.getElementById("senha");

const gerar=document.getElementById("gerar");

const copiar=document.getElementById("copiar");

const tamanho=document.getElementById("tamanho");

const valor=document.getElementById("valor");

const mai=document.getElementById("maiusculas");

const min=document.getElementById("minusculas");

const num=document.getElementById("numeros");

const sim=document.getElementById("simbolos");

const nivel=document.getElementById("nivel");

const texto=document.getElementById("textoForca");

valor.innerHTML=tamanho.value;

tamanho.oninput=()=>{

valor.innerHTML=tamanho.value;

}

function gerarSenha(){

let caracteres="";

if(mai.checked) caracteres+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(min.checked) caracteres+="abcdefghijklmnopqrstuvwxyz";

if(num.checked) caracteres+="0123456789";

if(sim.checked) caracteres+="!@#$%&*()-_=+[]{}?><";

if(caracteres===""){

alert("Escolha pelo menos uma opção.");

return;

}

let pass="";

for(let i=0;i<tamanho.value;i++){

pass+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));

}

senha.value=pass;

forca(pass);

}

function forca(pass){

let score=0;

if(pass.length>=8)score++;

if(pass.length>=12)score++;

if(/[A-Z]/.test(pass))score++;

if(/[a-z]/.test(pass))score++;

if(/[0-9]/.test(pass))score++;

if(/[!@#$%&*()_\-+=?><[\]{}]/.test(pass))score++;

let porcentagem=(score/6)*100;

nivel.style.width=porcentagem+"%";

if(score<=2){

nivel.style.background="red";

texto.innerHTML="Fraca";

}

else if(score<=4){

nivel.style.background="orange";

texto.innerHTML="Média";

}

else{

nivel.style.background="green";

texto.innerHTML="Forte";

}

}

gerar.onclick=gerarSenha;

copiar.onclick=()=>{

navigator.clipboard.writeText(senha.value);

copiar.innerHTML="✔ Copiado";

setTimeout(()=>{

copiar.innerHTML="📋 Copiar";

},2000);

}

gerarSenha();
