/*function bonjour(prenom){
return "bonjour " + prenom ;
}
bonjour("laurent")*/

var nombre = Math.random();
console.log("Nombre aléatoire = ", nombre);

/*var nb = prompt("Entrez un nombre entre 0 et 1");
console.log("Votre nombre est: ", nb);*/

var choisir = prompt("Tapez 1 pour jouer entre 1 et 10 \nTapez 2 pour jouer entre 1 et 100 \nTapez 3 pour jouer entre 1 et 1000 \nTapez 4 pour jouer entre 1 et 10 000");
console.log("Votre choix est: ", nb);

var choixAlea1 = Math.floor(Math.random() * 11);
var choixAlea2 = Math.floor(Math.random() * 101);
var choixAlea3 = Math.floor(Math.random() * 1001);
var choixAlea4 = Math.floor(Math.random() * 10001);

var choixUser1 = prompt("Choisissez votre nombre entre 1 et 10");
var choixUser2 = prompt("Choisissez votre nombre entre 1 et 100");
var choixUser3 = prompt("Choisissez votre nombre entre 1 et 1000");
var choixUser4 = prompt("Choisissez votre nombre entre 1 et 10000");

if (choisir == null) {alert("Vous quittez le programme du Nombre aléatoire");
console.log("Vous quittez le programme du Nombre aléatoire");}
/*if (choisir == null) {confirm("Vous voulez quitter le programme du Nombre aléatoire ?");
console.log("Vous voulez quitter le programme du Nombre aléatoire ?");}
if (confirm = true) {alert("Vous avez quitté le programme du Nombre aléatoire");}
console.log("Vous avez quitté le programme du Nombre aléatoire");
if (confirm = false) {alert("Vous restez sur le programme du Nombre aléatoire");}*/

if (choisir != null && nb == '') {alert("Vous avez validé sans renseigner de nombre");
console.log("Vous avez validé sans renseigner de nombre");}

if (choisir != null && nb == '1') {alert("Vous avez tapé 1 \nVous allez jouer entre 1 et 10");
console.log("Vous avez tapé 1 \nVous allez jouer entre 1 et 10");}

else if (choisir != null && nb == '2') {alert("Vous avez tapé 2 \nVous allez jouer entre 1 et 100");
console.log("Vous avez tapé 2 \nVous allez jouer entre 1 et 100");}

else if (choisir != null && nb == '3') {alert("Vous avez tapé 3 \nVous allez jouer entre 1 et 1000");
console.log("Vous avez tapé 3 \nVous allez jouer entre 1 et 1000");}

else if (choisir != null && nb == '4') {alert("Vous avez tapé 4 \nVous allez jouer entre 1 et 10 000");
console.log("Vous avez tapé 4 \nVous allez jouer entre 1 et 10 000");}

// --------------------------------------------------------------------------  10
if (choixUser1 != null && choixUser1 < choixAlea1) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Choix 1 à 10 - Votre nombre est < inférieur au nombre aléatoire");}

else if (choixUser1 != null && choixUser1 > choixAlea1) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Choix 1 à 10 - Votre nombre est > supérieur au nombre aléatoire");}

else if (choixUser1 != null && choixUser1 == choixAlea1) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}

// -------------------------------------------------------------------------  100
if (choixUser2 != null && choixUser2 < choixAlea2) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Choix 1 à 100 - Votre nombre est < inférieur au nombre aléatoire");}

else if (choixUser2 != null && choixUser2 > choixAlea2) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Choix 1 à 100 - Votre nombre est > supérieur au nombre aléatoire");}

else if (choixUser2 != null && choixUser2 == choixAlea2) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}

// -------------------------------------------------------------------------  1000
if (choixUser3 != null && choixUser3 < choixAlea3) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Choix 1 à 1000 - Votre nombre est < inférieur au nombre aléatoire");}

else if (choixUser3 != null && choixUser3 > choixAlea3) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Choix 1 à 1000 - Votre nombre est > supérieur au nombre aléatoire");}

else if (choixUser3 != null && choixUser3 == choixAlea3) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}

// -------------------------------------------------------------------------  10 000
if (choixUser4 != null && choixUser4 < choixAlea4) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Choix 1 à 10 000 - Votre nombre est < inférieur au nombre aléatoire");}

else if (choixUser4 != null && choixUser4 > choixAlea4) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Choix 1 à 10 000 - Votre nombre est > supérieur au nombre aléatoire");}

else if (choixUser4 != null && choixUser4 == choixAlea4) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}
