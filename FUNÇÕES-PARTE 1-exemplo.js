

//função
//(declarando como argumento) ex:n1,n2
function media(n1 , n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/2;

    //mostrando o resultado sem o return
    console.log(media)
    //

    return media//retornando o valor ==resultado
}
//executando a função
//botando os argumento(n1,n2)
media(4,3);
media(4,2)//assim adicionando varios argumentos 

//outro jeito de mostrar
//usando o return
var rs1= media(5,5) //resposta 1
var rs2=media(5,6) //resposta 2

//retornando como string
//por conta da string no meio dos valores
console.log(rs1 + " e " + rs2)

//retornando so os valores 
console.log(rs1 + rs2)
