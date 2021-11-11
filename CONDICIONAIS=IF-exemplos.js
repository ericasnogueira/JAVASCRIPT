//bloco de comando 
//com uma linha 
var idade = 18;

if (idade >=18)
    console.log("PODE")
else 
console.log("NAO PODE")

//com bloco de comando 
//quando tiver mais de uma linha 
var idade1 = 15;

if(idade1 >= 18){
    console.log("PODE ENTRAR")
    console.log("O QUE DESEJA ?")
}
 else{
    console.log("NAO PODE ENTRAR")
    console.log("VOLTE QUANDO TIVER 18 ANOS ")
}

//bloco de comando

var idade2= 20;

if (idade2 >=35){
    console.log("PODE ENTRAR")
    console.log("QUAL É O SEU PEDIDO ?")
} 
else if (idade2 >= 19 ){
    console.log("PODE ENTRAR")
    console.log("MAS ANTES MOSTRE A IDENTIDADE")    
}
else {
    console.log("NÃO PODE")
    console.log("VOLTE QUANDO TIVER 18 ANOS ")

}

//OUTRO EXEMPLO
//PARA PODER ENTRAR OS DOIS PRECISA SER
//VERDADEIROS NO PRIMEIRO IF 
//COMANDO COM &&
var  idade3 = 78;

if(idade3 >= 18 && idade3 <= 77 ){
    console.log("PODE ENTRAR")
    console.log("O QUE DESEJA ?")
}
 else{
    console.log("NAO PODE ENTRAR")
    console.log("VOLTE DEPOIS  ")
}

//COMANDO COM ||
//NESSE UMA DELAS PRECISA SER VERDADE
// NÃO NECESSITA SER AS DUAS VERDADEIRA 
var idade_4 = 20;
//OBS: OS NUMEROS ENTRE 18 ATÉ 77 NÃO IRAM ENTRAR
//MAIS OS NUMEROS MENORES QUE 18 E OS IGUAL AO 
//MAIORES  QUE 77 PODERAM ENTRAR
if(idade_4 < 18 || idade_4 >=77  ){
    console.log("PODE ENTRAR")
    console.log("O QUE DESEJA ?")
}
 else{
    console.log("NAO PODE ENTRAR")
    console.log("VOLTE DEPOIS ")
}
