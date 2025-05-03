document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block'; 
    resultado.innerHTML = `
      <h3>Dados Enviados:</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
  
    
    document.getElementById('formContato').reset();
  });
  