const formulaire = document.querySelector('#formulaireLogin');

formulaire.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    // Appel du backend pour se connecter et récupérer le token
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    //  Permet de transformer  
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (!response.ok) {
      // Si la réponse n'est pas OK, on lance une erreur
      throw new Error('Identifiants invalides');
    }

    const data = await response.json();
    // Stockage du token dans le local storage
    localStorage.setItem('token', data.token);
    console.log(localStorage.getItem('token'));
    // Redirection vers l'index si tout s'est bien passé
    window.location.href = '../index.html';
  } catch (error) {
    alert(error.message);
    // Affichage de l'erreur dans l'interface
    const errorMessage = document.querySelector('#errorMessage');
    errorMessage.textContent = error.message;
  }
});
