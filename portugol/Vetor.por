programa {
  funcao inicio() {
    // tipo de variavel > nome da var > vetor com 5 espaços (do 0 ao 4), outro com 3 valores ja atribuidos
    inteiro idade[5], numero
    cadeia pessoa[] = {"Naldo","Pinóquio","Mike Baguncinha","Melody","Luladrão","Bolsominion"}

    escreva("Informe um número de 0 a 5: ")
    leia(numero)

    // vai informar o nome da pessoa pelo numero informado
    escreva(pessoa[numero])
  }
}