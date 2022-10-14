/***Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//mettere costante
const lista = document.querySelector(`ul`);


const mail =[
  `eugenio.21@hotmail.it`,
  `eugenio.24@hotmail.it`,
  `eugenio.27@hotmail.it`,
  `eugenio.29@hotmail.it`,
  `eugenio.20@hotmail.it`,
  `eugenio.25@hotmail.it`,
  `eugenio.26@hotmail.it`,
  `eugenio.23@hotmail.it`,
  `eugenio.22@hotmail.it`,
  `eugenio.28@hotmail.it`,
]
let okMail = false;
let index;
const output = document.querySelector(`output`)

const insertMail = prompt(`inserisci la tua mail`)
console.log(mail);


for(let i = 0; i < mail.length; i++){

  if(mail[i] === insertMail){
    okMail = true;
  }else{
  }
}

if (okMail){
  output.innerHTML = `Mail Valida`;
}else{
  output.innerHTML = "Mail non valida";
}