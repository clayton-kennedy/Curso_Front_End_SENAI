programa {
  funcao inicio() {
    cadeia nome
    real salario_fixo, vendas, salario_comissao

    escreva("Digite o nome do vendedor: ")
    leia(nome)

    escreva("Digite o salário fixo do vendedor: ")
    leia(salario_fixo)

    escreva("Digite as vendas do vendedor: ")
    leia(vendas)

    salario_comissao = (vendas*0.15)+salario_fixo

    escreva("O vendedor ",nome," que recebia o salário de R$ ",salario_fixo,"\n irá receber R$ ",salario_comissao," com o acréscimo de 15% da comissão de suas vendas.")

  }
}
