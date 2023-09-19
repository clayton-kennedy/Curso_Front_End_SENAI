# Javascript
## Declarar variáveis
var = Declara uma variável, opcionalmente, inicializando-a com um valor.

let = Declara uma variável de escopo local do bloco, opcionalmente, inicializando-a com um valor.

const = Declara uma constante de escopo de bloco, apenas de leitura, e não pode ser modificada.

    Ex: 
    let y = 25
    var x = 36
    const CPF = 000.000.000-00


### Classificando variáveis
Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor undefined.

Tipos:
* Number = Ao contrário de muitas linguagens, JavaScript não faz distinção entre valores inteiros e valores em ponto flutuante. Todos os números em JavaScript são representados como valores em ponto flutuante.

* String = Para incluir uma string literal em um programa JavaScript, basta colocar os caracteres da string dentro de um par combinado de aspas simples ou duplas.

* Booleanos = Os valores booleanos são representados por true e false.

* Null = A palavra chave null indica a ausência de um valor.

* Undefined = O valor indefinido (undefined) representa uma ausência mais profunda, é o valor de variáveis que não foram inicializadas.

## Conversão de tipo de dados:
JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script.

No caso de um valor que representa um número está armazenado na memória como uma string, existem métodos para a conversão.

* parseInt()
* parseFloat() 

Irá retornar apenas números inteiros, então seu uso é restrito para a casa dos decimais. Além disso, é uma boa prática ao usar parseInt incluir o parâmetro da base. O parâmetro da base é usado para especificar qual sistema númerico deve ser usado.

# Operadores de comparação
|Tag|Propriedades 
|-|-|
|Igual (==)|Retorna verdadeiro caso os operandos sejam iguais.|
|Não igual (!=)|Retorna verdadeiro caso os operandos não sejam iguais.|
|Estritamente igual (===)|Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. |
|Estritamente não igual (!==)|Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.|
|Maior que (>)|Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.|
|Maior que ou igual (>=)|Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.|
|Menor que (<)|Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.	|
|Menor que ou igual (<=)|Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.|



# Estrutura de condição:
Use a declaração if para executar alguma declaração caso a condição lógica for verdadeira. Use a cláusula opcional else para executar alguma declaração caso a condição lógica for falsa. Uma declaração if é declarada da seguinte maneira:

Você pode também combinar declarações utilizando else if para obter várias condições testadas em sequência, como o seguinte:

    if (condicao) {
    declaracao_1;
    } else if (condicao_2) {
    declaracao_2;
    } else if (condicao_n) {
    declaracao_n;
    } else {
    declaracao_final;
    }

# Estrutura de Repetição: swith/case:
Uma declaração switch permite que um programa avalie uma expressão e tente associar o valor da expressão ao rótulo de um case. Se uma correspondência é encontrada, o programa executa a declaração associada. Uma declaração switch se parece com o seguinte:

    switch (expressao) {
    case rotulo_1:
        declaracoes_1
        [break;]
    case rotulo_2:
        declaracoes_2
        [break;]
    ...
    default:
        declaracoes_padrao
        [break;]

O programa primeiramente procura por uma cláusula case com um rótulo que corresponda ao valor da expressão e então transfere o controle para aquela cláusula, executando as declaracoes associadas. Se nenhum rótulo correspondente é encontrado, o programa procura pela cláusula opcional default e, se encontrada, transfere o controle àquela cláusula, executando as declarações associadas. Se nenhuma cláusula default é encontrada, o programa continua a execução a partir da declaracao seguinte ao switch. Por convenção, a cláusula default é a última, mas não é necessário que seja assim.

A instrução <strong>break</strong> associada a cada cláusula case, garante que o programa sairá do switch assim que a declaração correspondente for executada e que continuará a execução a partir da declaração seguinte ao switch. Se a declaração break for omitida, o programa continua a execução a partir da próxima declaração dentro do switch.

# Biblioteca Math 
Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

### Métodos

|Tag|Propriedades 
|-|-|
|Math.abs(x)|Retorna o módulo, ou valor absoluto, de um número|
|Math.acos(x)|Retorna o arco-coseno de um número|
|Math.acosh(x)|Retorna o arco-coseno hiperbólico de um número.|
|Math.asin(x)|Retorna o arco-seno de um número|
|Math.asinh(x)|Retorna o arco-seno hiperbólico de um número.|
|Math.atan(x)|Retorna o arco-tangente de um número|
|Math.atanh(x)||Retorna o arco-tangente hiperbólico de um número|
|Math.atan2(x, y)|Retorna o arco-tangente do quociente de seus argumentos.|
|Math.cbrt(x)|Retorna a raiz cúbica de um número|
|Math.ceil(x)|Retorna o menor inteiro que é maior ou igual a um número.|
|Math.cos(x)|Retorna o coseno de um número|
|Math.cosh(x)|Retorna o coseno hiperbólico de um número.|
|Math.exp(x)|Retorna e^x, onde x é o argumento, e e é a constante de Euler|
|Math.floor(x)|Retorna o maior inteiro que é menor ou igual a um número.|
|Math.fround(x)|Retorna a mais próxima representação de ponto flutuante de precisão-única de um número.|
|Math.max([x[,y[,…]]])|Retorna o maior dentre os parâmetros recebidos.|
|Math.min([x[,y[,…]]])|Retorna o menor dentre os parâmetros recebidos.|
|Math.pow(x,y)|Retorna a base x elevada à potência y do expoente|
|Math.random()|Retorna um número pseudo-aleatório entre 0 e 1.|
|Math.round(x)|Retorna o valor arrendodado de x, para o valor inteiro mais próximo.|
|Math.sign(x)|Retorna o sinal de x, indicando se é positivo, negativo ou zero.|
|Math.sin(x)|Retorna o seno de um número|
|Math.sinh(x)|Retorna o seno hiperbólico de um número|
|Math.sqrt(x)|Retorna a raiz quadrada positiva de um número|
|Math.tan(x)|Retorna a tangente de um número|
|Math.tanh(x)|Retorna a tangente hiperbólica de um número|


# Arrays
### Como funciona e para que serve um Array?

Um array é uma coleção de valores em JavaScript. Esses valores podem ser números, strings, objetos, etc. Aliás, um array pode ser criado de várias maneiras diferentes. Para acessar cada item nessa estrutura temos um índice numérico, que é consultado de formas distintas, como indicado abaixo.

    Exemplo:
    var cores = [ “azul”, “amarelo”, “rosa” ]

    var nome_do_array = new Array [elemento1, elemento2, ..., elementoN];

### Métodos de manipulação de Array
|Tag|Propriedades 
|-|-|
|push()|adiciona itens ao final de um array e altera o array original. |
|unshift()| insere um ou mais elementos no início do array|
|splice() |é possível adicionar elementos em qualquer posição do array|
|shift() | exclui o primeiro item array|
|pop() | Excluí o ultimo elemento do array|

## Como acessar um objeto dentro de um Array no JavaScript?
Para acessar um objeto dentro de um Array no JavaScript, você pode usar o método Array.prototype.find(). Este método retornará o primeiro objeto do Array que satisfizer a função de callback especificada.

Há ainda uma outra forma. O acesso a um objeto dentro de um Array no JavaScript pode ser feito utilizando a sintaxe de colchetes. Por exemplo, suponha que você tenha um Array chamado “myArray” que contém três objetos. Para acessar o primeiro objeto, você pode utilizar a sintaxe myArray[0].

E se ainda tiver dificuldades tente consultar um objeto com o método indexOf() para encontrar o índice do objeto no Array, e então acessar o objeto com base nesse índice. Você também pode usar o método forEach() para percorrer todos os elementos do Array e encontrar o objeto que você está procurando.

# Formatação de Texto
A tabela a seguir lista os métodos de objetos:
|Tag|Propriedades 
|-|-|
|charAt, charCodeAt, codePointAt|	Retorna o código do caractere ou o caractere em uma posição específica na string.|
|indexOf, lastIndexOf|	Retorna a posição de uma substring específica na string ou a última posição da substring específica, respectivamente.|
|startsWith, endsWith, includes	|Retorna se uma string começa, termina ou contém uma outra string específica.|
|concat|	Concatena o texto de duas strings e retorna uma nova string.|
|fromCharCode, fromCodePoint	|Cria uma string a partir de uma sequência específica de valores Unicode. Esse é um método da classe String, não de uma instância do tipo String.|
|split	|Separa um objeto String em um array de strings, separando a string em substrings.|
|slice|	Extrai uma seção de uma string e retorna uma nova string.|
|substring, substr|	Retorna um subconjunto específico de uma string, definindo os índices inicial e final, ou definindo um índice e um tamanho.|
|match, replace, search|	Trabalha com expressões regulares.|
|toLowerCase, toUpperCase	|Retorna a string com todos caracteres em minúsculo, ou maiúsculo, respectivamente.|
|normalize	|Retorna a Forma Normalizada Unicode (Unicode Normalization Form) da string que chama o método.|
|repeat|	Retorna uma string contendo os elementos do objeto repetidos pela quantidade de vezes dada.|
|trim	|Retira espaços em branco no começo e no final da string.|



# Funções

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
 
### Declarando uma função
A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function (en-US), seguida por:

Nome da Função.
Lista de argumentos para a função, entre parênteses e separados por vírgulas.
Declarações JavaScript que definem a função, entre chaves { }.

    Exemplo:
    function square(numero) {
        return numero * numero;
    }

Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.

Se você passar um objeto (ou seja, um valor não primitivo (en-US), tal como Array ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função, conforme mostrado no exemplo a seguir:

    function minhaFuncao(objeto) {
    objeto.make = "Toyota";
    }

    var meucarro = { make: "Honda", model: "Accord", year: 1998 };
    var x, y;

    x = meucarro.make; // x recebe o valor "Honda"

    minhaFuncao(meucarro);
    y = meucarro.make; // y recebe o valor "Toyota"
    // (a propriedade make foi alterada pela função)

Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome. Por exemplo, a função square poderia ter sido definida como:

    var square = function (numero) {
    return numero * numero;
    };
    var x = square(4); //x recebe o valor 16

# Funções pré-definidas
|Tag|Propriedades 
|-|-|
|eval()|O método eval() avalia código JavaScript representado como uma string.|
|uneval() |O método uneval() cria uma representação de string do código-fonte de um Object.|
|isFinite()|A função global isFinite() determina se o valor passado é um número finito. Se necessário, o parâmetro é primeiro convertido para um número.|
|isNaN()|A função isNaN() determina se um valor é NaN ou não. Nota: coerção dentro da função isNaN tem regras interessantes; você pode, alternativamente, querer usar Number.isNaN(), como definido no ECMAScript 6, ou você pode usar typeof para determinar se o valor não é um número.|
|parseFloat()|A função parseFloat() analisa um argumento do tipo string e retorna um número de ponto flutuante.|
|parseInt()|A função parseInt() analisa um argumento do tipo string e retorna um inteiro da base especificada (base do sistema numérico).|
|decodeURI()|A função decodeURI() decodifica uma Uniform Resource Identifier (URI) criada anteriormente por encodeURI ou por uma rotina similar.|
|decodeURIComponent()|O método decodeURIComponent() decodifica um componente Uniform Resource Identifier (URI) criado anteriormente por encodeURIComponent ou por uma rotina similar.|
|encodeURI()|O método encodeURI() codifica um Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").|
|encodeURIComponent()|O método encodeURIComponent() codifica um componente Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").|
|escape()| Deprecated - O método obsoleto escape() calcula uma nova string na qual certos caracteres foram substituídos por uma sequência de escape hexadecimal. Use encodeURI ou encodeURIComponent em vez disso.|
|unescape()| Deprecated - O método obsoleto unescape() calcula uma nova string na qual sequências de escape hexadecimais são substituídas pelo caractere que ela representa. As sequências de escape podem ser introduzidas por uma função como escape. Por unescape() estar obsoleto, use decodeURI() ou decodeURIComponent ao invés dele.|

# Eventos
|Evento|Onde|Propriedades 
|-|-|-|
|off|script|Aciona quando o documento fica off-line|
|Onabort|script|Triggers em um evento de aborto|
|onafterprint|script|Acionado depois que o documento é impresso|
|onbeforeonload|script|Triggers antes do carregamento do documento|
|onbeforeprint|script|Dispara antes que o documento seja impresso|
|onblur|script|Aciona quando a janela perde o foco|
|oncanplay|script|Aciona quando a mídia pode iniciar a reprodução, mas pode ter que parar para armazenar em buffer|
|oncanplaythrough|script|Aciona quando a mídia pode ser reproduzida até o final, sem parar para armazenar em buffer|
|onchange|script|Aciona quando um elemento é alterado|
|onclick|script|Gatilhos em um clique do mouse|
|oncontextmenu|script|Aciona quando um menu de contexto é acionado|
|ondblclick|script|Gatilhos em um mouse, clique duas vezes|
|ondrag|script|Aciona quando um elemento é arrastado|
|ondragend|script|Gatilhos no final de uma operação de arrastar|
|ondragenter|script|Aciona quando um elemento foi arrastado para um destino de soltar válido|
|ondragleave|script|Aciona quando um elemento está sendo arrastado sobre um destino de soltar válido|
|ondragover|script|Gatilhos no início de uma operação de arrastar|
|ondragstart|script|Gatilhos no início de uma operação de arrastar|
|ondrop|script|Aciona quando o elemento arrastado está sendo solto|
|ondurationchange|script|Aciona quando o comprimento da mídia é alterado|
|onemptied|script|Aciona quando um elemento de recurso de mídia fica vazio de repente.|
|onended|script|Aciona quando a mídia chega ao final|
|onerror|script|Acionadores quando ocorre um erro|
|onfocus|script|Aciona quando a janela recebe foco|
|onformchange|script|Aciona quando um formulário é alterado|
|onforminput|script|Aciona quando um formulário recebe entrada do usuário|
|onhaschange|script	|Aciona quando o documento foi alterado|
|input|script|Aciona quando um elemento recebe entrada do usuário|
|oninvalid|script|Aciona quando um elemento é inválido|
|onkeydown|script|Aciona quando uma tecla é pressionada|
|onkeypress	|script|Aciona quando uma tecla é pressionada e liberada|
|onkeyup|script|Aciona quando uma chave é liberada|
|loading|script|Acionadores quando o documento é carregado|
|onloadeddata|script|Aciona quando os dados de mídia são carregados|
|onloadedmetadata|script|Aciona quando a duração e outros dados de mídia de um elemento de mídia são carregados|
|onloadstart|script|Aciona quando o navegador começa a carregar os dados de mídia|
|onmessage|script|Aciona quando a mensagem é acionada|
|onmousedown|script|Aciona quando um botão do mouse é pressionado|
|onmousemove|script|Aciona quando o ponteiro do mouse se move|
|onmouseout|script|Aciona quando o ponteiro do mouse sai de um elemento|
|onmouseover|script|Aciona quando o ponteiro do mouse se move sobre um elemento|
|onmouseup|script|Acionadores quando um botão do mouse é liberado|
|onmousewheel|script|Aciona quando a roda do mouse está sendo girada|
|onoffline|script|Aciona quando o documento fica off-line|
|onoine|script|Aciona quando o documento fica on-line|
|ononline|script|Aciona quando o documento fica on-line|
|onpagehide|script|Aciona quando a janela está oculta|
|onpageshow|script|Aciona quando a janela se torna visível|
|onpause|script|Aciona quando os dados de mídia são pausados|
|onplay|script|Aciona quando os dados de mídia começarão a ser reproduzidos|
|playing|script|Aciona quando os dados de mídia começam a ser reproduzidos|
|onpopstate|script|Aciona quando o histórico da janela é alterado|
|progress|script|Aciona quando o navegador está buscando os dados da mídia|
|onratechange|script|Aciona quando a taxa de reprodução dos dados de mídia foi alterada|
|onreadystatechange|script|Aciona quando as alterações do estado pronto|
|onredo|script|Aciona quando o documento realiza um refazer|
|onresize|script|Aciona quando a janela é redimensionada|
|onscroll|script|Aciona quando a barra de rolagem de um elemento está sendo rolada|
|onseeked|script|Aciona quando o atributo em busca de um elemento de mídia não é mais verdadeiro e a busca terminou|
|onsearch|script|Aciona quando o atributo de busca de um elemento de mídia é verdadeiro e a busca foi iniciada|
|onselect|script|Aciona quando um elemento é selecionado|
|onstalled|script|Aciona quando há um erro ao buscar dados de mídia|
|onstorage|script|Acionadores quando um documento é carregado|
|onsubmit|script|Aciona quando um formulário é enviado|
|onsuspend|script|Aciona quando o navegador estiver buscando dados de mídia, mas parou antes que todo o arquivo de mídia fosse buscado|
|ontimeupdate|roteiro|Aciona quando a mídia muda sua posição de reprodução|
|onundo|script|Aciona quando um documento executa um desfazer|
|onunload|script|Aciona quando o usuário sai do documento|
|onvolumechange|script|Aciona quando a mídia altera o volume, também quando o volume está definido como “mudo”|
|waiting|script|Aciona quando a mídia parou de ser reproduzida, mas espera-se que seja retomada|