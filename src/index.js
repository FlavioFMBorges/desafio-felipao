let nomeDoHeroi = "Flávio Borges"
let xpDoHeroi = 10.005  //Esse valor pode ser modificado para saber o nível do Herói
let nivelDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let ferro = 1.000
let bronze = [1.001, 2.000]
let Prata = [2.001, 6.000]
let Ouro = [6.001, 7.000]
let Platina = [7.001, 8.000]
let Ascendente = [8.001, 9.000]
let Imortal = [9.001, 10.000]
let Radiante = [10.001]


if(xpDoHeroi <= ferro){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[0])
}else if((xpDoHeroi >= bronze[0]) && (xpDoHeroi <= bronze[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[1])
}else if((xpDoHeroi >= Prata[0]) && (xpDoHeroi <= Prata[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[2])
}else if((xpDoHeroi >= Ouro[0]) && (xpDoHeroi <= Ouro[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[3])
}else if((xpDoHeroi >= Platina[0]) && (xpDoHeroi <= Platina[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[4])
}else if((xpDoHeroi >= Ascendente[0]) && (xpDoHeroi <= Ascendente[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[5])
}else if((xpDoHeroi >= Imortal[0]) && (xpDoHeroi <= Imortal[1])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[6])
}else{
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + nivelDoHeroi[7])
}