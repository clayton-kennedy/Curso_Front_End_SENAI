programa {

inclua biblioteca Texto --> text
  funcao criar_linha() {
    escreva("\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/\n")
    }

    funcao soma (inteiro n1, inteiro n2){
      retorne n1+n2
    }

    funcao inicio(){
      inteiro numero1, numero2, resultado

      criar_linha()
      escreva("Some seus n�meros!\n")
      escreva("Primeiro n�mero: ")
      leia(numero1)
      escreva("Segundo n�mero: ")
      leia(numero2)
      criar_linha()

      resultado = soma(numero1, numero2)

      escreva("O resultado da sua soma �: ",resultado)

      criar_linha()

    }
}