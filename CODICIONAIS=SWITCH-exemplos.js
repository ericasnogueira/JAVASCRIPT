
//EXEMPLO
//nota de aluno

var nota1= 4;
var nota2= 3;

var media = (nota1 + nota2)/2;
var conceito ="";

if (media >=7){
    conceito = "OTIMO"
}else if  (media >=6.5){
    conceito="BOM"
}
else {
    conceito="MAIS OU MENOS "
}

//IMPRIMINDO
console.log("MEDIA FOI " + media ,"QUE E " + conceito)

//PRIMEIRA MANEIRA DE FAZER ISSO
if (media >= 7){
    console.log("VOCE PASSAOU")
}
else {
    console.log("NAO PASSOU")
}

//COM O SWITCH
//SEGUNDA MANEIRA DE FAZER ISSO
// COM A VAR CONCEITO
switch(conceito){
    case "OTIMO":
        console.log("otimo aluno")
        break;
    case "BOM":
        console.log("quase perfeito")
        break;
    case "MAIS OU MENOS ":
        console.log("estudE mais")
        break;
    //caso não for nenhuma das opções 
    //acima sera ele 
    default:
        console.log("algum erro")
        break;
}

//ASSIM ELE ACEITA EXPRESSÕES
switch(true) {
    case  media <= 6:
        console.log("NAO PASSOU")
        console.log("MEDIA INSUFICINTE : " + media)
        break;
    case media >=6 :
        console.log("PASSOU ")
        console.log("MEDIA SUFICIENTE :"  +  media)
        break;
    default:
        console.log("OUVE ALGUM ERRO COM A MEDIA ")
        break;
}
console.log(media)
