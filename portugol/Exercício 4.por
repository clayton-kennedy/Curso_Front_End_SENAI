programa {
  funcao inicio() {
    caracter nome
    real salario_fixo, vendas, salario_comissao

    escreva("Digite o nome do vendedor: ")
    leia(nome)

    escreva("Digite o salário fixo do vendedor: ")
    leia(salario_fixo)

    escreva("Digite as vendas do vendedor: ")
    leia(vendas)

    salario_comissao = (vendas*0.15)+salario_fixo

    escreva("O novo salário do vendedor é: ",salario_comissao)

  }
}
