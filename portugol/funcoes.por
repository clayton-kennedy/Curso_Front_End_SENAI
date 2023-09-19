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
      escreva("Some seus números!\n")
      escreva("Primeiro número: ")
      leia(numero1)
      escreva("Segundo número: ")
      leia(numero2)
      criar_linha()

      resultado = soma(numero1, numero2)

      escreva("O resultado da sua soma é: ",resultado)

      criar_linha()

    }
}