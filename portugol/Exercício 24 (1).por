programa {
  funcao inicio() {
    /* EXERCICIO 22 - Crie um algoritmo capaz de verificar se um numero é ou não múltiplo de 5.*/
    real numero

    escreva("Digite o número: ")
    leia(numero)

    se (numero % 5 == 0){
      escreva("O número é múltiplo de 5.")
  }
    senao {
    escreva("O número não é múltiplo de 5.")}
  }
}
