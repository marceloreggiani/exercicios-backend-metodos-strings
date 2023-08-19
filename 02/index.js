const cpf = "12345678900";
const cnpj = "12345678900111";

const validarCpf = (cpf) => {
    if (cpf.length !== 11) {
        console.log('CPF Invalido');
    } else {
        const cpfFormatado = (`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`);
        console.log(cpfFormatado);
    }
}

validarCpf(cpf);

const validarCnpj = (cnpj) => {
    if (cnpj.length !== 14) {
        console.log('CNPJ Invalido');
    } else {
        const cnpjFormatado = (`${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`);
        console.log(cnpjFormatado);
    }
}

validarCnpj(cnpj);