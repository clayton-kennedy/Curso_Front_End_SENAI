programa {
  /* EXERCÍCIO 18- Faça um algoritmo que receba um número e diga se este número está no intervalo
   entre 100 e 200.
*/
  funcao inicio() {
    real numero

    escreva("Digite o número: ")
    leia(numero)

    se (numero >= 100 e <= 200){
      escreva("O ",numero," está no intervalo entre 100 e 200.")
    }
    senao {
      escreva("O ",numero," NÃO está no intervalo entre 100 e 200.")
    }
  }
}
