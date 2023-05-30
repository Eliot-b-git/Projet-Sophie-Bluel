// Création de la gallerie 
  async function figureJSONData() {
    const response = await fetch("http://localhost:5678/api/works");
    const jsonData = await response.json();
    console.log(jsonData);
    let counter0 = 0;
    jsonData.forEach(function(element) {
      // création d'un élément figure
      let figure = document.createElement("figure");
      // Attribution des categories de chaque photos 
      figure.dataset.categorie = element.category.id;
      //  création de l'image 
      let image = document.createElement("img");
      
      // Ajout d'un paramétre d'image
      image.src = element.imageUrl;
      image.alt = element.title;
      figure.id = 'aa' + counter0;
      figure.classList = 'a' + counter0;
              
      // Ajout de l'image en tant qu'enfant dans figure
      figure.appendChild(image);

      // création d'un élément figcaption    
      let figcaption = document.createElement("figcaption");
      // Extraction et du texte d'un figcaption
      let text = document.createTextNode(element["title"]);
      // Ajout du text en tant qu'enfant pour figcaption
      figcaption.appendChild(text);
      // Ajout de figcaption en tant qu'enfant pour figure
      figure.appendChild(figcaption);
      
      // Création de la gallery 
      let gallery = document.querySelector(".gallery");
    
      // Ajout de la figure en tant qu'enfant dans de la class gallery
      gallery.appendChild(figure);

      counter0++;

      

    });
  }     
  figureJSONData();   

// Création des filtres
  async function categorieJSONData() {

    // réinitialisation des filtres
    const filtres = document.querySelectorAll(".filtres");
    filtres.forEach(function(filtre) {
      filtre.remove();
    });

    // Récupération des infos des différentes catégories
    const responseCategories = await fetch("http://localhost:5678/api/categories");
    const jsonDataCategories = await responseCategories.json();
    console.log(jsonDataCategories);

    // Variable counter 
    let counter = 0;

    // Création des catégories
    jsonDataCategories.forEach(function(element) {
      // Création de la balise des catégories 
      let categories = document.createElement("categories");
      //  Ajout de la class et ID aux balises filtres
      categories.id = counter;
      categories.className += "filtres"

      // Extraction des nom de filtre
      let text = document.createTextNode(element["name"]);
      // Ajout des nom de filtres aux balises categories
      categories.appendChild(text);
      // Création d'un variable qui selectionne l'emplacement de la class filtre
      let filtre = document.querySelector(".filtre");
      // Ajout a l'emplacement de la class filtre du HTML
      filtre.appendChild(categories);  
      
      counter++;
    });

    // Récupération des catégories
    let filtre1 = document.getElementById("0");
    let filtre2 = document.getElementById("1");
    let filtre3 = document.getElementById("2");
    let filtre4 = document.getElementById("Tous");

    filtre4.addEventListener("click", function() {
      // Affichage de toutes les images
      images.forEach(function(image) {
        image.style.display = "block";
      });
      setActiveFilter(filtre4);
    });
    

    // Ajout d'un événement "click" à chaque catégorie
    filtre1.addEventListener("click", function() {
      filterGallery(1);
      setActiveFilter(filtre1);
    });

    filtre2.addEventListener("click", function() {
      filterGallery(2);
      setActiveFilter(filtre2);
    });

    filtre3.addEventListener("click", function() {
      filterGallery(3);
      setActiveFilter(filtre3);
    });

    let images = document.querySelectorAll(".gallery figure");


    function filterGallery(selectedCategorie) {
      // Parcours de toutes les images
      images.forEach(function(image) {
        // Récupération de la catégorie de l'image
        let categorie = image.getAttribute("data-categorie");
        // Vérification si l'image correspond à la catégorie sélectionnée
        if (categorie == selectedCategorie) {
          // Affichage de l'image
          image.style.display = "block"; 
        } else {
          // Cachage de l'image
          image.style.display = "none";
        } 
      });

    }

    // Fonction pour définir un filtre actif
    function setActiveFilter(activeFilter) {

      // Réinitialisation de la backgroundColor de tous les filtres
      filtre1.style.backgroundColor = "";
      filtre2.style.backgroundColor = "";
      filtre3.style.backgroundColor = "";
      filtre4.style.backgroundColor = "";

      // Réinitialisation de la couleur de tous les filtres
      filtre1.style.color = "";
      filtre2.style.color = "";
      filtre3.style.color = "";
      filtre4.style.color = "";

      // Définition de la couleur du filtre actif
      activeFilter.style.backgroundColor = "#1D6154";
      activeFilter.style.color = "white";
    }
  }

categorieJSONData();

// Identification et ajout due a l'indentification 
  const token = localStorage.getItem('token');

  // Vérifie si un token est présent dans le stockage local
  function deleteToken() {
    localStorage.removeItem('token');
    updateLoginButton();
  }      

  function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }

  function updateLoginButton() {
    const loginButton = document.querySelector('#loginButton');
    if (isLoggedIn()) {
      // Ajout des changements sur la page d'accueil
      loginButton.textContent = 'logout';
      loginButton.removeAttribute('href')
      // Ajout de l'événements logout
      loginButton.addEventListener("click", deleteToken);
      addBanniereCreateur();
    } else {
      removeBanniereCreateur();
      loginButton.textContent = 'login';
      loginButton.setAttribute('href', './assets/login.html');
    }
  }

  // Création de la banniere mode administrateur
  function addBanniereCreateur() {
    
    let header = document.querySelector('header');
    let banniere = document.querySelector('#banniereCreateur');
    let modeEdition = document.createElement("span");
    let logopublier = document.createElement("span");
    let icones = document.createElement('icones');
    let publier = document.createElement('span');
    let pagemodal = document.createElement('a')
    
    banniere = document.createElement("div");
    banniere.id = "banniereCreateur";
    
    icones.classList = "fa-solid fa-pen-to-square";
    icones.id = "ModifierBanniere";

    
    modeEdition.textContent = "Mode édition";
    modeEdition.id = "modeEditions";

    publier.id = "publier";
    publier.classList = "lienmodal2"
    publier.textContent = "publier les changements";

    pagemodal.id = 'lienmodal';
    pagemodal.classList = 'js-modal';
    pagemodal.href = '#modal1';

    banniere.appendChild(pagemodal);
    header.prepend(banniere);
    pagemodal.appendChild(icones);
    pagemodal.appendChild(logopublier);
    logopublier.appendChild(modeEdition);
    banniere.appendChild(publier);
  }

  // Supression de la banniere si deconnecté
  function removeBanniereCreateur() {
    let banniere = document.querySelector('#banniereCreateur');
    banniere.remove();
  }

  // Appel de la fonction updateLoginButton lors du chargement de la page
  updateLoginButton();


// Pages modals
let modal = null

  // Ouverture de la page modal 
const openModal = function(e) {
    e.preventDefault()
    
    const  target = document.getElementById('modal1')
    console.log(target)  
    // Permet de rendre visisble la boite
    target.style.display = 'block'
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')

    modal = target

    modal.addEventListener('click', closeModal)
    //  Arret si click sur la croix
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    //  Arret si click en dehors de la page modal
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}
// Ouverture de la page modal qui gére l'ajout des photos
const openModal2 = function(e) {
  e.preventDefault()
  
  const target = document.getElementById('modal2')
  console.log(target)
  target.style.display = 'block'
  target.removeAttribute('aria-hidden')
  target.setAttribute('aria-modal', 'true')

  modal = target

  modal.addEventListener('click', closeModal)
  modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}


// Fermeture de la page modal 
const closeModal = function (e) {
  if (modal === null) return
  e.preventDefault()
  modal.style.display = "none"
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('arial-modal')
  modal.removeEventListener('click', closeModal)
  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
  modal = null
}         
// Permet d'eviter que lorsque on click dans la boite modal sa ne ferme pas 
const stopPropagation = function (e) {
  e.stopPropagation()
}
// Retour en arriére si on clique sur la fléche 
const fleche = document.querySelector('.fleche');
fleche.addEventListener("click", closeModal);
fleche.addEventListener("click", openModal);

// Permet de pouvoir quitter la page modale avec echap
window.addEventListener('keydown', function (e){
  if (e.key === "Escape" || e.key === "Esc" ) {
    closeModal(e)
  }

})

// Selectionner l'aside 
const premiermodifier = document.getElementById('premiermodifier')
premiermodifier.addEventListener('click', openModal)

const secondmodifier = document.getElementById('secondmodifier')
secondmodifier.addEventListener('click', openModal)
secondmodifier.addEventListener('click', updateGallery())

// Lorsque on clique sur ajout photo sa ouvre la deuxiéme page modal et ferme la premiére
const addPhoto = document.getElementById("addPhoto");
addPhoto.addEventListener("click", closeModal);
addPhoto.addEventListener("click", openModal2);

let counter0 = 0;
// Définition de la fonction qui met à jour la galerie avec les données fournies et qui gére la supression de chaque photo
async function updateGallery() {
  // Récupération des données JSON depuis l'API
  const response = await fetch("http://localhost:5678/api/works");
  const jsonData = await response.json();
  
  jsonData.forEach(function(element) {
    // création d'un élément figure
    let figure = document.createElement("figure");
    // Attribution des categories de chaque photos 
    figure.dataset.categorie = element.category.id;
    //  création de l'image 
    let image = document.createElement("img");
    image.classList = "imgModal"; 
    
    // Ajout d'un paramétre d'image
    image.src = element.imageUrl;
            
    // Ajout de l'image en tant qu'enfant dans figure
    figure.appendChild(image);

    // création d'un élément figcaption    
    let figcaption = document.createElement("figcaption");

    // Création de l'icône poubelle pour la suppression de la photo
    let iconePoubelle = document.createElement("i")
    iconePoubelle.classList = "fa-solid fa-trash-can poubelle"

    // Ajout de la classe "Editer" au figcaption
    figcaption.classList = "Editer"
    // Ajout de l'icône poubelle en tant qu'enfant de la figure
    figure.appendChild(iconePoubelle)

    // Ajout des attributs des photos 
    figure.id = 'aa' + counter0;
    figure.classList = 'a' + counter0;
    iconePoubelle.dataset.api = element.id;

    // Ajout d'un gestionnaire d'événements "click" sur l'icône poubelle
    iconePoubelle.addEventListener('click', function() {

       id = iconePoubelle.dataset.api
      // Envoi de la requête DELETE à l'API pour supprimer l'image
      const token = localStorage.getItem('token');
      fetch(`http://localhost:5678/api/works/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.ok) {
          // Selectionne et suprimme les photos de la galerie 
          let gallery = document.querySelectorAll(".gallery figure");
          gallery.forEach(function(element) {
            element.remove();
          });
          
          // Suppression de la figure et de l'image
          figure.remove();
          // Appel de la fonction qui crée la galerie
          figureJSONData();

          // Mettre à jour la liste des poubelles
          updatePoubelles(document.querySelectorAll('.poubelle'));

          // Permet que a chaque supression de photo les filtres marchent 
          const filtres = document.querySelectorAll(".filtres");
          filtres.forEach(function(filtre) {
            filtre.remove();
          });
          categorieJSONData();
  
        } else {
          throw new Error('Erreur lors de la suppression de l\'image');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Une erreur est survenue lors de la suppression de l\'image');
      });
      console.log('Icône poubelle cliquée');

    });   
    // Extraction et du texte d'un figcaption
    let text = document.createTextNode('éditer');
    // Ajout du text en tant qu'enfant pour figcaption
    figcaption.appendChild(text);
    // Ajout de figcaption en tant qu'enfant pour figure
    figure.appendChild(figcaption);
   
    
    // Création de la gallery 
    let gallery = document.querySelector(".lesPhotos");
  
    // Ajout de la figure en tant qu'enfant dans de la class gallery
    gallery.appendChild(figure);

    counter0++;
  });
}


// Définition de la fonction qui met à jour la liste des poubelles
function updatePoubelles(poubelles) {
  poubelles.forEach(poubelle => {
    poubelle.addEventListener('click', () => {
      const figure = poubelle.parentNode;
      const classe = figure.getAttribute('class');
      const img = document.querySelector(`.gallery .${classe}`);
      figure.remove();
      if (img) {
        img.remove();
      }
      // Mettre à jour la liste des poubelles en appelant récursivement la fonction
      updatePoubelles(document.querySelectorAll('.poubelle'));
    });
  });
}
    
// Récupération de toutes les poubelles
const poubelles = document.querySelectorAll('.poubelle');

function refreshGallery() {
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      // Appel de la fonction updateGallery avec les nouvelles données
      updateGallery(data);
      

    })
    .catch(error => {
      console.error(error);
      alert('Une erreur est survenue lors de la récupération des images');
    });
}

// Déposer une photo sur le page modal publier les changements 

const dropArea = document.getElementById("drop-area");
const addPhotoBtn = document.querySelector(".add-photo");

// Ajout d'une nouvelle photo
function addNewPhoto() {
  // Recréer les éléments HTML pour ajouter une nouvelle photo
  const azertyDiv = document.createElement("div");
  azertyDiv.id = "Azerty";

  const newFileInput = document.createElement("input");
  newFileInput.type = "file";
  newFileInput.id = "file-input";
  newFileInput.accept = ".jpg, .jpeg, .png";
  newFileInput.multiple = true;

  const newIconLabel = document.createElement("label");
  const newIcon = document.createElement("i");
  newIcon.classList.add("fa-solid", "fa-image");
  newIconLabel.appendChild(newIcon);

  const newAddPhotoLabel = document.createElement("label");
  newAddPhotoLabel.htmlFor = "file-input";
  newAddPhotoLabel.classList.add("add-photo");
  newAddPhotoLabel.textContent = "+ Ajouter photo";

  const newFileTypeSpan = document.createElement("span");
  newFileTypeSpan.classList.add("file-type");
  newFileTypeSpan.textContent = "JPG, PNG : 4 Mo max";

  azertyDiv.appendChild(newFileInput);
  azertyDiv.appendChild(newIconLabel);
  azertyDiv.appendChild(newAddPhotoLabel);
  azertyDiv.appendChild(newFileTypeSpan);

  // Ajouter le nouvel élément HTML à la page
  dropArea.appendChild(azertyDiv);

  // Ajouter un gestionnaire d'événements pour le champ de fichier
  newFileInput.addEventListener("change" , function(e) {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      console.log(file);
      console.log(files)
      // Afficher la photo dans le drop-area
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.maxHeight = "100%";
      img.style.maxWidth = "100%";
      newIconLabel.remove();
      newAddPhotoLabel.remove();
      newFileTypeSpan.remove();
      dropArea.appendChild(img);
    }
  });

}
// Appeler la fonction au besoin
addNewPhoto();

// Ajout du bouton valider dynamique 

  const boutonvalider = document.getElementById("boutonValider");
  const titreInput = document.getElementById("titre");
  const categorieInput = document.getElementById("categorie");
  const fileInput = document.getElementById("file-input");

  // Fonction pour mettre à jour l'état du bouton Valider
  function updateSubmitButtonState() {
    const titre = titreInput.value;
    const categorie = categorieInput.value;
    const files = fileInput.files;

    if (titre && categorie && files.length) {
      boutonvalider.style.backgroundColor = "#1D6154";
      boutonvalider.style.color = "white";
    } else {
      boutonvalider.style.backgroundColor = ""; // Remettre la couleur par défaut
      boutonvalider.style.color = ""; // Remettre la couleur par défaut
    }
  }

  // Écouter les modifications des champs
  titreInput.addEventListener("input", updateSubmitButtonState);
  categorieInput.addEventListener("input", updateSubmitButtonState);
  fileInput.addEventListener("change", updateSubmitButtonState);


const form = document.getElementById("formulaireAjoutPhoto");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêcher l'envoi normal du formulaire

  // Déclaration de tout les constantes utiles 
  const titre = document.getElementById("titre").value;
  const categorie = document.getElementById("categorie").value;
  const fileInput = document.getElementById("file-input");
  const files = fileInput.files;


  // Vérifier que tous les champs sont remplis
  console.log(categorie)
  if (!titre || !categorie || !files.length) {
    alert("Veuillez remplir tous les champs !");
    return;
  } 
  
  // Attribuer l'ID de la catégorie en fonction de son nom
  let categoryId;
  if (categorie === "Objets") {
    categoryId = 1;
  } else if (categorie === "Appartements") {
    categoryId = 2;
  } else if (categorie === "Hotels & Restaurant") {
    categoryId = 3;
  }

  // Créer un objet FormData pour envoyer les données du formulaire
  const formData = new FormData();
  formData.append("title", titre);
  formData.append("category", categoryId);
  if (files && files.length > 0) {
      formData.append("image", files[0]);
  }

  const token = localStorage.getItem('token');

  fetch("http://localhost:5678/api/works", {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {

        // Créer un nouvel élément figure pour le projet ajouté
        const newFigure = document.createElement('figure');
        let gallery = document.querySelector(".gallery");

        // Ajouts des attributs 
        newFigure.id = 'aa' + counter0;
        newFigure.classList = 'a' + counter0;
        newFigure.setAttribute('data-categorie', categoryId); 

        // Ajours des attributs de l'image 
        const newImage = document.createElement('img');
        newImage.src = data.imageUrl;
        newImage.alt = data.title;
        newFigure.appendChild(newImage);

        // Ajout du texte de l'image
        const newCaption = document.createElement('figcaption');
        const newCaptionText = document.createTextNode(data.title);
        newCaption.appendChild(newCaptionText);
        newFigure.appendChild(newCaption);

        // Ajouter le nouvel élément à la galerie
        gallery.appendChild(newFigure);
        console.log(data); 

        // Réinitialiser les champs du formulaire
        const image = document.querySelector("#drop-area img");
        if (image) {
          image.remove();
        }
        form.reset();
        fileInput.value = '';
        const azerty = document.getElementById("Azerty"); 
        azerty.remove();
        // Récreation de la partie ajouter une photo sur la page modal 2
        addNewPhoto();

        // Réinitialiser la gallerie 
        const lesphotos = document.querySelectorAll(".lesPhotos figure");
        lesphotos.forEach((figure) => {
          figure.remove();
        });
        refreshGallery();
        // Réinitialiser les filtres
        categorieJSONData();

          
  })
  .catch((error) => console.error(error));
});
