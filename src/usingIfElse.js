let nome = "Heroi"
let xp = 3272
let nivel = ""
if( xp > 0){
    if (xp <= 1000){ 
         nivel = "Ferro"
        }        
    else if (xp > 1000 && xp<= 2000){ 
        nivel = "Bronze"
        }          
    else if ( xp > 2000 && xp<= 5000){
        nivel = "Prata"
         }
    else if ( xp > 5000 && xp <= 7000){
        nivel = "Ouro"
        }
    else if ( xp > 7000 && xp <= 8000){
        nivel = "Platina"
        }       
    else if ( xp > 8000 && xp <= 9000){
        nivel = "Asecendente"
        }
    else if ( xp > 9000 && xp <= 10000){
        nivel = "Imortal"
        }
    else if( xp > 10000) {
            nivel = "Radiante"
        }
console.log( "O heroi de nome" + nome + "possui " + xp + " pontos de vida e é nível: " + nivel )
}
else{ console.log( "O heroi de nome " + nome + " está morto.")}