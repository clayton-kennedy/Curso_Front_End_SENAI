programa {
  funcao inicio() {
        caracter nome
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
    
    escreva("O aluno ", nome ," possuí média ",media," entre as três provas.")

  }
}
