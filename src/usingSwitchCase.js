let nome = "Heroi"
let xp = -50
let nivel = ""

if (xp > 0){

    switch(true){ case xp <= 1000 : 
                nivel = "Ferro"
                break
                case xp > 1000 && xp<= 2000 : 
                nivel = "Bronze"
                break  
                case  xp > 2000 && xp<= 5000 :
                nivel = "Prata"
                break
                case  xp > 5000 && xp <= 7000 :
                nivel = "Ouro"
                break
                case  xp > 7000 && xp <= 8000 :
                nivel = "Platina"
                break
                case  xp > 8000 && xp <= 9000 :
                nivel = "Asecendente"
                break
                case  xp > 9000 && xp <= 10000 :
                nivel = "Imortal"
                break
                case  xp > 10000: 
                nivel = "Radiante"
                break
                default: console.log( "Não foram informados nome nem pontos de vida do heroi.")
    }
console.log( "O heroi de nome " + nome + "possui " + xp + " pontos de vida e está no nível " + nivel )
}
else{ console.log( "O heroi de nome " + nome + " está morto.")}