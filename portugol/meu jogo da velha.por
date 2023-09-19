programa{  
  cadeia jogadores[2]
  funcao nomes(){
            escreva("Qual o nome do primeiro jogador?\n")
            leia(jogadores[0])
            escreva("Qual o nome do segundo jogador?\n")
            leia(jogadores[1])
  }
  funcao inicio(){
    caracter jogovelha[3][3]
    inteiro linha, coluna, linha_jogada, coluna_jogada, jogador, ganhou, qtd_jogadas, opcao

      jogador = 1
      ganhou = 0
      qtd_jogadas = 0

      para(linha = 0; linha < 3; linha++){
      para(coluna = 0; coluna < 3; coluna++)
          jogovelha[linha][coluna] = ' '}
  
      nomes()
      faca{
        escreva("\n 0   1    2\n\n")
        para(linha = 0; linha < 3; linha++){
        para(coluna = 0; coluna < 3; coluna++){
            escreva(" ", jogovelha[linha][coluna])
            se(coluna < 2)
              escreva(" ! ")
            se(coluna == 2)
              escreva("  ", linha)
          }
            se(linha < 2)
            escreva("\n============")
          escreva("\n")
        }
          escreva("\n")

        faca{
        faca{
          se (jogador == 1){
            escreva("\n",jogadores[0],", digite a linha e coluna desejada: \n")
            escreva("Linha: ")
            leia(linha_jogada) 
            escreva("Coluna: ")
            leia(coluna_jogada)}
          senao {
            escreva("\n",jogadores[1],", digite a linha e coluna desejada: ")
            leia(linha_jogada, coluna_jogada)}
          }
          enquanto(linha_jogada < 0 ou linha_jogada > 2 ou coluna_jogada < 0 ou coluna_jogada > 2)
          }
          enquanto(jogovelha[linha_jogada][coluna_jogada] != ' ')
        
        se(jogador == 1){
          jogovelha[linha_jogada][coluna_jogada] = '0'
          jogador++}
        senao{
          jogovelha[linha_jogada][coluna_jogada] = 'X'
          jogador = 1}

        qtd_jogadas++
        limpa()
        
        para(linha = 0; linha < 3; linha++){
          se(jogovelha[linha][0] == '0' e jogovelha[linha][1] == '0' e jogovelha[linha][2] == '0')
            ganhou = 1
        }
    
        para(linha = 0; linha < 3; linha++){
          se(jogovelha[linha][0] == 'X' e jogovelha[linha][1] == 'X' e jogovelha[linha][2] == 'X')
            ganhou = 2
        }
        
        para(coluna = 0; coluna < 3; coluna++){
          se(jogovelha[0][coluna] == '0' e jogovelha[1][coluna] == '0' e jogovelha[2][coluna] == '0')
            ganhou = 1
        }
    
        para(coluna = 0; coluna < 3; coluna++){
          se(jogovelha[0][coluna] == 'X' e jogovelha[1][coluna] == 'X' e jogovelha[2][coluna] == 'X')
            ganhou = 2
        }

        se(jogovelha[0][0] == '0' e jogovelha[1][1] == '0' e jogovelha[2][2] == '0')
          ganhou = 1
    
        se(jogovelha[0][0] == 'X' e jogovelha[1][1] == 'X' e jogovelha[2][2] == 'X')
          ganhou = 2
        
        se(jogovelha[0][2] == '0' e jogovelha[1][1] == '0' e jogovelha[2][0] == '0')
          ganhou = 1  
    
        se(jogovelha[0][2] == 'X' e jogovelha[1][1] == 'X' e jogovelha[2][0] == 'X')
          ganhou = 2
        }
        enquanto(ganhou == 0 e qtd_jogadas < 9)
  
        escreva("\n 0   1    2\n")
        para(linha = 0; linha < 3; linha++){
        para(coluna = 0; coluna < 3; coluna++){
            escreva(" ", jogovelha[linha][coluna])
            se(coluna < 2)
              escreva(" ! ")
            se(coluna == 2)
              escreva("  ", linha)
          }
            se(linha < 2)
            escreva("\n============")
          escreva("\n")
      }
      se (ganhou == 1)
        escreva("\n",jogadores[0],", Parabéns! Você ganhou!\n")

      se (ganhou == 2)
        escreva("\n",jogadores[1],", Parabéns! Você ganhou!\n")
    }
  }
}