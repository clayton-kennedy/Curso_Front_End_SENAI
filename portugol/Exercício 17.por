programa {
  /* EXERC�CIO 17- Escrever um algoritmo que leia dois valores inteiro distintos e informe qual � 
  o maior. */
  funcao inicio() {
    inteiro numero1, numero2

    escreva("Digite o primeiro n�mero: ")
    leia(numero1)
    escreva("Digite o segundo n�mero: ")
    leia(numero2)

    se (numero1 > numero2){
      escreva("O ",numero1," � o maior.")}
    senao se (numero1 < numero2) {
      escreva("O ",numero2," � o maior.")}
    senao {
      escreva("Os n�meros n�o podem ser iguais.")}
    }
  }
}
