/*function bonjour(prenom){
return "bonjour " + prenom ;
}
bonjour("laurent")*/

var nombre = Math.random();
console.log("Nombre aléatoire = ", nombre);

var nb = prompt("Entrez un nombre entre 0 et 1");
console.log("Votre nombre est: ", nb);

if (nb == null) {alert("Vous quittez le programme du Nombre aléatoire");
console.log("Vous quittez le programme du Nombre aléatoire");}
/*if (nb == null) {confirm("Vous voulez quitter le programme du Nombre aléatoire ?");
console.log("Vous voulez quitter le programme du Nombre aléatoire ?");}
if (confirm = true) {alert("Vous avez quitté le programme du Nombre aléatoire");}
console.log("Vous avez quitté le programme du Nombre aléatoire");
if (confirm = false) {alert("Vous restez sur le programme du Nombre aléatoire");}*/

if (nb != null && nb == '') {alert("Vous avez validé sans renseigner de nombre compris entre 0 et 1");
console.log("Vous avez validé sans renseigner de nombre compris entre 0 et 1");}


else if (nb != null && nb < nombre) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Votre nombre est < inférieur au nombre aléatoire");}



else if (nb != null && nb > nombre) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Votre nombre est supérieur au nombre aléatoire");}



else if (nb != null && nb == nombre) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}
