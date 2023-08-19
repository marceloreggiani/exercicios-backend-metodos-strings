const numeroCartao = '1111222233334444';

const numerosIniciais = numeroCartao.slice(0, 4);
const numerosFinais = numeroCartao.slice(12);

const numeroCartaoFormatado = `${numerosIniciais.padEnd(8, '*')}${numerosFinais.padStart(8, '*')}`;

console.log(numeroCartaoFormatado);