programa {
    cadeia tabuleiro[9]
    inteiro i, posicao = 0, jogador = 1, jogadas = 0
    logico vitoria

  funcao popular_tabuleiro(){
    para (i = 0; i <= 8; i++){
      tabuleiro[i] = ""+i+"" // FEZ A CONTATENAÇÃO SOMANDO A VAR i COM DOIS ESPAÇOS VAZIOS AOS LADOS E TORNANDO-A UMA VAR CADEIA.
    }
  }
  funcao desenhar_tabuleiro(){
    para (i = 0; i <= 8; i++){
      escreva(tabuleiro[i])
      se (i == 2 ou i == 5 ou i == 8){
        escreva("\n==========\n")
      }
      se (i != 2 e i != 5 e i != 8){
        escreva(" | ")
      }
    }
  }
  funcao jogar_trocar(){
    se (jogador == 1){
      tabuleiro[posicao] = "O"
      jogador++
    }
    senao{
      tabuleiro[posicao] = "X"
      jogador = 1
    }
  }
  funcao logico validacao(){
    logico vencedor = falso
      se ((tabuleiro[0] == tabuleiro[1] e tabuleiro[1] == tabuleiro[2]) ou (tabuleiro[3] == tabuleiro[4] e tabuleiro[4] == tabuleiro[5]) ou (tabuleiro[6] == tabuleiro[7] e tabuleiro[7] == tabuleiro[8])){
      vencedor = verdadeiro
      }
      se ((tabuleiro[0] == tabuleiro[3] e tabuleiro[3] == tabuleiro[6]) ou (tabuleiro[1] == tabuleiro[4] e tabuleiro[4] == tabuleiro[7]) ou (tabuleiro[2] == tabuleiro[5] e tabuleiro[5] == tabuleiro[8])){
      vencedor = verdadeiro
      }
      se ((tabuleiro[0] == tabuleiro[4] e tabuleiro[4] == tabuleiro[8]) ou (tabuleiro[2] == tabuleiro[4] e tabuleiro[4] == tabuleiro[6])){
      vencedor = verdadeiro
      }
  }
  funcao inicio() {
    popular_tabuleiro()
    desenhar_tabuleiro()
  faca{
      faca{
    escreva("\nDigite onde deseja jogar: ")
    leia(posicao)
    limpa()
    desenhar_tabuleiro()
    }
    enquanto (posicao < 0 ou posicao > 8 ou tabuleiro[posicao] == "O" ou tabuleiro[posicao] == "X")
    jogar_trocar()
    vitoria = validacao()
    limpa()
    desenhar_tabuleiro()
    jogadas += 1
  }
  enquanto(vitoria == falso e jogadas <= 8)
  se (jogadas == 9 e vitoria == falso){
    escreva("\nEmpate!")
  }
  senao se (vitoria == verdadeiro)
  }
}