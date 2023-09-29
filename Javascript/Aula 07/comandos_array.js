
let frutas = ["abacaxi", "Morango", "Kiwi", "Goiaba", "Melão"];

frutas.push("Uva"); //adicionar item ao final da array
frutas.unshift("Maçã"); //adicionar item ao inicio da array
frutas.shift(""); //Deleta item ao inicio da array
frutas.pop(""); //Deleta item ao final da array

console.log(frutas);
//Para descobrir a posicao de um item no array
//precisa ser escrito exatamente como está na array
let posicaoArray = frutas.indexOf("Kiwi");
console.log('Posição na array: '+posicaoArray);
//Agora que sabe o index do item, para apaga-lo
frutas.splice(posicaoArray, 1)
//Precisa da posição do item e quantos itens serão deletados
console.log(frutas);

// ====================================================================================

let nome = 'Clayton';

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());