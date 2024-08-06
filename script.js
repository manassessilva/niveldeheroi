let nome = prompt("Olá, insira o nome do seu Herói: ")
let xp = prompt("Agora insira a quantidade de XP obtida nessa temporada: ")

console.log("Parabéns por chegar ao fim de mais uma jornada " + nome + "." + "\n")

if((xp >= 0) && (xp <= 1000)){
    console.log("O seu nível nessa season foi: Ferro 👏")
}
else if((xp >= 1001) && (xp <= 2000)){
    console.log("O seu nível nessa season foi: Bronze 🙂")
}
else if((xp >= 2001) && (xp <= 3000)){
    console.log("O seu nível nessa season foi: Prata 😊")
}
else if((xp >= 3001) && (xp <= 4000)){
    console.log("O seu nível nessa season foi: Platina 😊")
}
else if((xp >= 4001) && (xp <= 5000)){
    console.log("O seu nível nessa season foi: Ouro 😀")
}
else if((xp >= 5001) && (xp <= 6000)){
    console.log("O seu nível nessa season foi: Diamante 😁")
}
else if((xp >= 6001) && (xp <= 7000)){
    console.log("O seu nível nessa season foi: Ascendente 😍")
}
else if((xp >= 7001) && (xp <= 8000)){
    console.log("O seu nível nessa season foi: Mestre 😮")
}
else if((xp >= 8001) && (xp <= 9000)){
    console.log("O seu nível nessa season foi: Lendário 😲")
}
else if((xp >= 9001) && (xp <= 10000)){
    console.log("O seu nível nessa season foi: Imortal 😨")
}
else if(xp >= 10001){
    console.log("O seu nível nessa season foi: Radiante 😱")
}
else{
    console.log("Valor de XP inserido está incorreto. Tente novamente!" + "\n" + "Lembre-se de inserir apenas números.")
}