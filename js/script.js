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


