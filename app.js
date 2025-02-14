// Declaração do array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    inputAmigo.value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos e adiciona cada nome à lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}