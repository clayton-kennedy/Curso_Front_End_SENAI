programa {
  /* EXERCÍCIO 17- Escrever um algoritmo que leia dois valores inteiro distintos e informe qual é 
  o maior. */
  funcao inicio() {
    inteiro numero1, numero2

    escreva("Digite o primeiro número: ")
    leia(numero1)
    escreva("Digite o segundo número: ")
    leia(numero2)

    se (numero1 > numero2){
      escreva("O ",numero1," é o maior.")}
    senao se (numero1 < numero2) {
      escreva("O ",numero2," é o maior.")}
    senao {
      escreva("Os números não podem ser iguais.")}
    }
  }
}
