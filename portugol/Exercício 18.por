programa {
  /* EXERC�CIO 18- Fa�a um algoritmo que receba um n�mero e diga se este n�mero est� no intervalo
   entre 100 e 200.
*/
  funcao inicio() {
    real numero

    escreva("Digite o n�mero: ")
    leia(numero)

    se (numero >= 100 e <= 200){
      escreva("O ",numero," est� no intervalo entre 100 e 200.")
    }
    senao {
      escreva("O ",numero," N�O est� no intervalo entre 100 e 200.")
    }
  }
}
