programa {
  funcao inicio() {
        cadeia nome
        real nota1 , nota2, nota3, media

    escreva("Digite o nome do aluno: ")
    leia(nome)

    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)

    media = (nota1+nota2+nota3)/3
    
    escreva("O aluno ", nome ," possu� m�dia ",media," entre as tr�s provas.")

  }
}
