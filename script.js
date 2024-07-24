tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }


/////////////////////////////


 // Função para abrir o modal
 function openModal() {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('login-modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('login-modal').style.display = 'none';
}

// Fechar o modal se o usuário clicar fora dele
document.getElementById('modal-overlay').addEventListener('click', function() {
    closeModal();
});

// Impedir o fechamento do modal se clicar dentro dele
document.getElementById('login-modal').addEventListener('click', function(event) {
    event.stopPropagation();
});









 // Função para abrir o menu modal
 function abrirModal() {
    const modal = document.getElementById('menuModal');
    modal.classList.add('open');
}

// Função para fechar o menu modal
function fecharModal() {
    const modal = document.getElementById('menuModal');
    modal.classList.remove('open');
}











// Função para alternar modo dark
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
    
    // Salvar preferência do usuário no localStorage
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
}

// Verificar a preferência do usuário no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode');
    const body = document.body;
    
    if (isDarkMode === 'true') {
        body.classList.add('dark');
    } else {
        body.classList.add('light'); // Modo claro padrão
    }
});
