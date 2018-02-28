/*function bonjour(prenom){
return "bonjour " + prenom ;
}
bonjour("laurent")*/

Math.random();
console.log("Nombre aléatoire = ", Math.random());

var nb = prompt("Entrez un nombre entre 0 et 1", nb);
if (nb != null && nb <= Math.random()) {
	alert("Votre nombre est inférieur ou égal au nombre aléatoire ");
} else if (nb != null && nb >= Math.random()) {
	alert("Votre nombre est supérieur ou égal au nombre aléatoire ");
} else if (nb != null && nb == Math.random()) {
	alert("Votre nombre est égal au nombre aléatoire ");
} else if (nb != null && nb == '') {alert("Vous avez validé sans renseigner de nombre compris entre 0 et 1");}
	

console.log("Votre nombre est: ", nb);
