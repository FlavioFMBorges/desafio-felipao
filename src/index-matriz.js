let nomeDoHeroi = "Flávio Borges"
let xpDoHeroi = 10.000  //Esse valor pode ser modificado para saber o nível do Herói
let matrizDoHeroi = [
    ["Ferro", "1.000","0"],
    ["Bronze","1.001", "2.000"],
    ["Prata","2.001", "6.000"],
    ["Ouro","6.001", "7.000"],
    ["Platina","7.001", "8.000"],
    ["Ascendente","8.001", "9.000"],
    ["Imortal","9.001", "10.000"],
    ["Radiante","10.001","0"]
]
if(xpDoHeroi <= matrizDoHeroi[0][1]){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[0][0])
}else if((xpDoHeroi >= matrizDoHeroi[1][1]) && (xpDoHeroi <= matrizDoHeroi[1][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[1][0])
}else if((xpDoHeroi >= matrizDoHeroi[2][1]) && (xpDoHeroi <= matrizDoHeroi[2][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[2][0])
}else if((xpDoHeroi >= matrizDoHeroi[3][1]) && (xpDoHeroi <= matrizDoHeroi[3][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[3][0])
}else if((xpDoHeroi >= matrizDoHeroi[4][1]) && (xpDoHeroi <= matrizDoHeroi[4][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[4][0])
}else if((xpDoHeroi >= matrizDoHeroi[5][1]) && (xpDoHeroi <= matrizDoHeroi[5][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[5][0])
}else if((xpDoHeroi >= matrizDoHeroi[6][1]) && (xpDoHeroi <= matrizDoHeroi[6][2])){
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[6][0])
}else{
    console.log("O Herói de nome " +  nomeDoHeroi, "está no nível de " + matrizDoHeroi[7][0])
}