document.getElementById('executar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const operacao = document.getElementById('operacao').value;

    let resultado;
    if (operacao === 'criptografar') {
        resultado = criptografar(texto);
    } else if (operacao === 'descriptografar') {
        resultado = descriptografar(texto);
    }

    document.getElementById('resultado').innerText = resultado;
});

document.getElementById('copiar').addEventListener('click', function() {
    const resultado = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(resultado)
        .then(() => alert('Texto copiado para a área de transferência'))
        .catch(err => console.error('Erro ao copiar texto: ', err));
});
function criptografar(texto) {
    const regras = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const regex = /[eioua]/g;

    return texto.replace(regex, match => regras[match]);
}

function descriptografar(textoCriptografado) {
    const regras = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const regex = /(enter|imes|ai|ober|ufat)/g;

    return textoCriptografado.replace(regex, match => regras[match]);
}
//Neste código, ao clicar no botão "Executar", verificamos se o texto inserido está vazio

document.getElementById('executar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value.trim(); // Remover espaços em branco extras
    const operacao = document.getElementById('operacao').value;

    let resultado;
    if (texto === '') {
        document.getElementById('resultado').innerText = 'Nenhuma mensagem encontrada. Digite um texto desejado.';
        document.getElementById('interatividade').classList.add('hidden'); // Ocultar a imagem de interatividade
    } else {
        if (operacao === 'criptografar') {
            resultado = criptografar(texto);
        } else if (operacao === 'descriptografar') {
            resultado = descriptografar(texto);
        }

        document.getElementById('resultado').innerText = resultado;
        document.getElementById('interatividade').classList.remove('hidden'); // Mostrar a imagem de interatividade
    }
});

document.getElementById('copiar').addEventListener('click', function() {
    const resultado = document.getElementById('resultado').innerText;
    if (resultado) { // Verificar se há um resultado disponível para copiar
        navigator.clipboard.writeText(resultado)
            .then(() => alert('Texto copiado para a área de transferência'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    }
});
