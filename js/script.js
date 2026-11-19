const formulario = document.getElementById('formulario');

function LerFormulario() {
    return { codiname: formulario.querySelector('#codiname').value,
                nome: formulario.querySelector('#nome').value,
                idade: formulario.querySelector('#idade').value,
                email: formulario.querySelector('#email').value,
                ja-jogou-gta: formulario.querySelector('#ja-jogou-gta').checked,
                plataforma: formulario.querySelector('#plataforma').value,
    };
}

function tratar(dados) {
    return {
        codiname: capitalizar(dados.codiname),
        nome: capitalizar(dados.nome),
        idade: capitalizar(dados.idade),
        email: capitalizar(dados.email),
        plataforma: capitalizar(dados.plataforma),
        ja-jogou-gta: capitalizar(dados.ja-jogou-gta)
    };
}

function capitalizar(texto) {
    const palavras = texto.trim().toLowerCase().split(" ");
    const resultado = [];
    for (let palavra of palavras) {
        resultado.push(palavra[0].toUpperCase() + palavra.slice(1));
    }
}

function validar (recruta) {
    if (recruta.codinome === "") {
        throw new Error("Informe seu nickname");
    if (recruta.nome === "") {
        throw new Error("Informe seu nome");
    }
    if (recruta.idade === "") {
        throw new Error("A idade deve ser um numero inteiro entre 1 e 120.");
    }
    
    }
    if (recruta.plataforma === "") {
        throw new Error("A plataforma é obrigatória");
    }
    if (recruta.email === "") {
        throw new Error("O email é obrigatório");


