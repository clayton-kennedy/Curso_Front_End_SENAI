programa {
  funcao inicio() {
    inteiro coluna, linha
    cadeia matriz[4][4]


    para (linha = 0; linha <= 3; linha++){
      para (coluna = 0; coluna <= 3; coluna++){
          matriz[linha][coluna] = "[O]"
      }
    }
    para (linha = 0; linha <= 3; linha++){
      para (coluna = 0; coluna <= 3; coluna++){
          escreva(matriz[linha][coluna])
      }
      escreva("\n")
    }


  }
}