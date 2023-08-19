const email = "aluno@cubos.academy";

function validarEmail(email) {
    let emailValido = true;
    if (email.indexOf('@') < 0) {
        emailValido = false;
    } else if (email.indexOf('.') < 0) {
        emailValido = false;
    } else if (email.indexOf('.') === 0) {
        emailValido = false;
    } else if (email.lastIndexOf('.') === email.length - 1) {
        emailValido = false;
    }

    if (emailValido) {
        console.log("Email Válido");
    } else {
        console.log("Email Invalido");
    }
}
validarEmail(email);