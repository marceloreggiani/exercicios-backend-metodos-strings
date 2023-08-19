const cpf = "011.022.033-44";
const cnpj = "01.000.000./0001-45"

function removerPontuação(numero) {
    let numeros = numero.replace('-', '').replace('/', '').split('.');
    let numeroLimpos = '';

    for (const item of numeros) {
        numeroLimpos += item;
    }
    console.log(numeroLimpos);
}
removerPontuação(cpf);
removerPontuação(cnpj);