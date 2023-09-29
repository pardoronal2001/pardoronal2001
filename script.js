function registerUser() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (!name || !email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

   
    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = `
        <h3>Datos del Usuario Registrado:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Contraseña:</strong> ${password}</p>
    `;
}
