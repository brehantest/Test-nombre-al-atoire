/*function bonjour(prenom){
return "bonjour " + prenom ;
}
bonjour("laurent")*/

Math.random();
console.log("Nombre aléatoire = ", Math.random());

var nb = prompt("Entrez un nombre entre 0 et 1", nb);
console.log("Votre nombre est: ", nb);

if (nb != null && nb == '') {alert("Vous avez validé sans renseigner de nombre compris entre 0 et 1");
console.log("Vous avez validé sans renseigner de nombre compris entre 0 et 1");}


else if (nb != null && nb < Math.random()) {
	alert("Votre nombre est inférieur au nombre aléatoire ");
console.log("Votre nombre est < inférieur au nombre aléatoire");}



else if (nb != null && nb > Math.random()) {
	alert("Votre nombre est > supérieur au nombre aléatoire ");
console.log("Votre nombre est supérieur au nombre aléatoire");}



else if (nb != null && nb == Math.random()) {
alert("Votre nombre est égal au nombre aléatoire ");
console.log("Votre nombre est égal au nombre aléatoire");}
