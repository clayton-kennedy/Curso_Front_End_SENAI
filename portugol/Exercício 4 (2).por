programa {
  funcao inicio() {
    cadeia nome
    real salario_fixo, vendas, salario_comissao

    escreva("Digite o nome do vendedor: ")
    leia(nome)

    escreva("Digite o sal�rio fixo do vendedor: ")
    leia(salario_fixo)

    escreva("Digite as vendas do vendedor: ")
    leia(vendas)

    salario_comissao = (vendas*0.15)+salario_fixo

    escreva("O vendedor ",nome," que recebia o sal�rio de R$ ",salario_fixo,"\n ir� receber R$ ",salario_comissao," com o acr�scimo de 15% da comiss�o de suas vendas.")

  }
}
