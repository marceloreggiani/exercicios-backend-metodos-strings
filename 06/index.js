const celular = 71911118888;

function formatarCelular(numero) {
    let celularFormatado = '';

    if (numero.length === 8) {
        celularFormatado = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
        console.log(celularFormatado);
    } else if (numero.length === 9) {
        celularFormatado = `${numero.slice(0, 1)} ${numero.slice(1, 5)}-${numero.slice(5)}`;
        console.log(celularFormatado);
    } else if (numero.length === 10) {
        celularFormatado = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(6)}`;
        console.log(celularFormatado);
    } else if (numero.length === 11) {
        celularFormatado = `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(3, 7)}-${numero.slice(7)}`;
        console.log(celularFormatado);
    } else {
        console.log("Numero Invalido");
    }
}
formatarCelular(celular.toString()) // toString usado caso o numero informado não seja informado como string na const celular