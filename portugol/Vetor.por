programa {
  funcao inicio() {
    // tipo de variavel > nome da var > vetor com 5 espa�os (do 0 ao 4), outro com 3 valores ja atribuidos
    inteiro idade[5], numero
    cadeia pessoa[] = {"Naldo","Pin�quio","Mike Baguncinha","Melody","Luladr�o","Bolsominion"}

    escreva("Informe um n�mero de 0 a 5: ")
    leia(numero)

    // vai informar o nome da pessoa pelo numero informado
    escreva(pessoa[numero])
  }
}