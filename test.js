var nombreMystere = Math.ceil(Math.random() * 101)    ;
var nombreTaper ; 

var compteurEssai = 0 ; 

console.log("début du programme") ; 

do
{
	compteurEssai++ ; 
	nombreTaper = Number.parseInt(prompt("Quel est le nombre Mystère ? ")) ; 
	
	if ( nombreTaper < nombreMystere ) 
	{
		alert("c'est plus !") ; 
	}
	else if ( nombreTaper > nombreMystere ) 
	{
		alert("c'est moins !") ; 
	}
	
	
}
while( nombreTaper != nombreMystere ) ;

alert("Bravo, vous avez trouver le  nombre mystèmre. vous avez mis " + compteurEssai + " essai" ); 

function bidon()
{
	var uneVariable ; 
}

