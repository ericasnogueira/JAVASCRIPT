//PRIMEIRO FOR 
// SERVE PARA REPETI ALGUMA COISA 
//UM CERTO NUMERO DE VEZES 

var numero = 5;
// se a var for maior que 5, ele nao executa nenhuma vez 
// ele ira direto para a console.log("ACABOU")]

/*EXPLICANDO
//for(p1;p2;p3){
    comandos;
}
p1=inicialização do contador
p2=condição de execução do loop
p3=incremento ou decremento do contador
*/
for(var vez = 0; vez < numero; vez++){

    //resposta é 0
    console.log(vez)

    // IMPRIMINDO A QUATIDADE DE VEZ 
    console.log("EXEXUTANDO O FOR " +vez)

    //outro exemplo
    console.log("OUTRO EXEMPLO DE  FOR " +(vez + 10))
    
}
console.log("ACABOU");
