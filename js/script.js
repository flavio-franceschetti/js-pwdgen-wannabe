// Dichiaro le variabili
let userName, userSurname, favColor, password;

// Chiedo il nome all'utente
userName = prompt("Qual è il tuo nome?");
//Stampo il nome in console
console.log(userName);

// Chiedo il cognome all'utente
userSurname = prompt("Qual è il tuo cognome?");
// Stampo il cognome in console
console.log(userSurname);

// Chiedo il colore preferito all'utente
favColor = prompt("Qual è il tuo colore preferito?");
// Stampo il colore preferito in console
console.log(favColor);

// Creo la variabile con la password generata
password = `${userName}${userSurname}${favColor}23`;
// Stampo la password in console
console.log(password);

// Inserisco la password generata nel mio html
document.getElementById("password").innerHTML = password;
