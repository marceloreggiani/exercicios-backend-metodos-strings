const nomeArquivo = 'Foto da Familia.pdf';

function validarArquivo(arquivo) {
    const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1);
    //console.log(extensao);
    if (extensao === 'jpg' || extensao === 'jpeg' || extensao === 'git' || extensao === 'png') {
        console.log("ARQUIVO VALIDO");
    } else {
        console.log("ARQUIVO INVALIDO");
    }
}

validarArquivo(nomeArquivo)