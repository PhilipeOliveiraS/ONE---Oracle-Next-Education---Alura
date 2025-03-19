let participantes = [];

// Função para adicionar novo participante
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    if (participantes.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    participantes.push(nome);
    inputAmigo.value = '';
    atualizarListaParticipantes();
    criarConfete(3);
}

// Função para remover participante
function removerParticipante(indice) {
    participantes.splice(indice, 1);
    atualizarListaParticipantes();
}

// Atualiza a lista visual de participantes
function atualizarListaParticipantes() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    participantes.forEach((nome, indice) => {
        const itemLista = document.createElement('li');
        itemLista.innerHTML = `
            ${nome}
            <button class="botao-remover" onclick="removerParticipante(${indice})">
                <i class="fas fa-times"></i>
            </button>
        `;
        lista.appendChild(itemLista);
    });
}

// Função principal de sorteio
function sortearAmigo() {
    if (participantes.length < 2) {
        alert('Adicione pelo menos 2 participantes!');
        return;
    }
    
    // Mostrar GIF de animação
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.style.display = 'block';
    
    // Criar cópia embaralhada
    const embaralhado = [...participantes].sort(() => Math.random() - 0.5);
    
    // Verificar se há auto-sorteio
    const sorteioValido = embaralhado.every((nome, indice) => nome !== participantes[indice]);
    
    if (!sorteioValido) {
        return sortearAmigo(); // Re-sortear se necessário
    }
    
    // Atraso para simular processamento e mostrar o GIF
    setTimeout(() => {
        gifContainer.style.display = 'none';
        mostrarResultados(embaralhado);
        criarConfete(20);
    }, 3000);
}

// Exibe os resultados na tela
function mostrarResultados(listaEmbaralhada) {
    const containerResultado = document.getElementById('resultado');
    containerResultado.innerHTML = '';
    
    participantes.forEach((nome, indice) => {
        const item = document.createElement('div');
        item.className = 'item-resultado';
        item.innerHTML = `
            <span>${nome}</span>
            <i class="fas fa-arrow-right"></i>
            <span>${listaEmbaralhada[indice]}</span>
        `;
        containerResultado.appendChild(item);
    });
    
    containerResultado.style.display = 'block';
}

// Cria efeito de confete
function criarConfete(quantidade = 5) {
    const cores = ['#ff4081', '#4CAF50', '#FFC107', '#2196F3'];
    
    for (let i = 0; i < quantidade; i++) {
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.background = cores[Math.floor(Math.random() * cores.length)];
        confete.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confete);
        
        setTimeout(() => confete.remove(), 5000);
    }
}