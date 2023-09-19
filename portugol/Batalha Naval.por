programa {
  /* Batalha naval com 1 barco entre 36 particulas
  sendo 7 linhas (0 a 6) e 7 colunas (0 a 6) */

  funcao inicio() {
    inteiro numero, linha, coluna

    // vetor com 7 linhas e 7 colunas (0 a 6)
    cadeia naval[7][7]

    naval[3][4] = "Barco"
    naval[1][5] = "Submarino"
    naval[2][0] = "Você afundou!"

    escreva("Informe a linha: ")
    leia(linha)
    escreva("Informe a coluna: ")
    leia(coluna)

    se (linha == 3 e coluna == 4){
      escreva("Parabéns, você encontrou o Barco!", naval[3][4])
    }
    senao se (linha == 1 e coluna == 5){
      escreva("Parabéns, você encontrou o ",naval[1][5],"!")
    }
    senao se (linha == 2 e coluna == 0){
      escreva(naval[2][0],"!")
    }
    senao {
      escreva("Não foi dessa vez!")
    }
    }


  }
}