programa {
  funcao inicio() {
    /* EXERCICIO 22 - Crie um algoritmo capaz de verificar se um numero � ou n�o m�ltiplo de 5.*/
    real numero

    escreva("Digite o n�mero: ")
    leia(numero)

    se (numero % 5 == 0){
      escreva("O n�mero � m�ltiplo de 5.")
  }
    senao {
    escreva("O n�mero n�o � m�ltiplo de 5.")}
  }
}
