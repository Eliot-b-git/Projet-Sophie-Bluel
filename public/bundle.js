/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./FrontEnd/assets/index.js":
/*!**********************************!*\
  !*** ./FrontEnd/assets/index.js ***!
  \**********************************/
/***/ (() => {

eval("// Création de la gallerie \r\nasync function loadGallery() {\r\n  const response = await fetch(\"http://localhost:5678/api/works\");\r\n  const jsonData = await response.json();\r\n  console.log(jsonData);\r\n  let counter0 = 0;\r\n  jsonData.forEach(function(element) {\r\n    // création d'un élément figure\r\n    let figure = document.createElement(\"figure\");\r\n    // Attribution des categories de chaque photos \r\n    figure.dataset.categorie = element.category.id;\r\n    //  création de l'image \r\n    let image = document.createElement(\"img\");\r\n    \r\n    // Ajout des paramétres\r\n    image.src = element.imageUrl;\r\n    image.alt = element.title;\r\n    figure.id = 'aa' + counter0;\r\n    figure.classList = 'a' + counter0;\r\n            \r\n    // Ajout de l'image en tant qu'enfant dans figure\r\n    figure.appendChild(image);\r\n\r\n    // création d'un élément figcaption    \r\n    let figcaption = document.createElement(\"figcaption\");\r\n    // Extraction et du texte d'un figcaption\r\n    let text = document.createTextNode(element[\"title\"]);\r\n    // Ajout du text en tant qu'enfant pour figcaption\r\n    figcaption.appendChild(text);\r\n    // Ajout de figcaption en tant qu'enfant pour figure\r\n    figure.appendChild(figcaption);\r\n    \r\n    // Création de la gallery \r\n    let gallery = document.querySelector(\".gallery\");\r\n  \r\n    // Ajout de la figure en tant qu'enfant dans de la class gallery\r\n    gallery.appendChild(figure);\r\n\r\n    counter0++;\r\n  });\r\n}     \r\nloadGallery();   \r\n\r\n// Création des filtres\r\nasync function categorieJSONData() {\r\n\r\n  // réinitialisation des filtres\r\n  const filtres = document.querySelectorAll(\".filtres\");\r\n  filtres.forEach(function(filtre) {\r\n    filtre.remove();\r\n  });\r\n\r\n  // Récupération des infos des différentes catégories\r\n  const responseCategories = await fetch(\"http://localhost:5678/api/categories\");\r\n  const jsonDataCategories = await responseCategories.json();\r\n  console.log(jsonDataCategories);\r\n\r\n  // Variable counter \r\n  let counter = 0;\r\n\r\n  // Création des catégories\r\n  jsonDataCategories.forEach(function(element) {\r\n    // Création de la balise des catégories \r\n    let categories = document.createElement(\"categories\");\r\n    //  Ajout de la class et ID aux balises filtres\r\n    categories.id = counter;\r\n    categories.className += \"filtres\"\r\n\r\n    // Extraction des nom de filtre\r\n    let text = document.createTextNode(element[\"name\"]);\r\n    // Ajout des nom de filtres aux balises categories\r\n    categories.appendChild(text);\r\n    // Création d'un variable qui selectionne l'emplacement de la class filtre\r\n    let filtre = document.querySelector(\".filtre\");\r\n    // Ajout a l'emplacement de la class filtre du HTML\r\n    filtre.appendChild(categories);  \r\n    \r\n    counter++;\r\n  });\r\n\r\n  // Récupération des catégories\r\n  let filtre1 = document.getElementById(\"0\");\r\n  let filtre2 = document.getElementById(\"1\");\r\n  let filtre3 = document.getElementById(\"2\");\r\n  let filtre4 = document.getElementById(\"Tous\");\r\n\r\n  filtre4.addEventListener(\"click\", function() {\r\n    // Affichage de toutes les images\r\n    images.forEach(function(image) {\r\n      image.style.display = \"block\";\r\n    });\r\n    setActiveFilter(filtre4);\r\n  });\r\n  \r\n\r\n  // Ajout d'un événement \"click\" à chaque catégorie\r\n  filtre1.addEventListener(\"click\", function() {\r\n    filterGallery(1);\r\n    setActiveFilter(filtre1);\r\n  });\r\n\r\n  filtre2.addEventListener(\"click\", function() {\r\n    filterGallery(2);\r\n    setActiveFilter(filtre2);\r\n  });\r\n\r\n  filtre3.addEventListener(\"click\", function() {\r\n    filterGallery(3);\r\n    setActiveFilter(filtre3);\r\n  });\r\n\r\n  let images = document.querySelectorAll(\".gallery figure\");\r\n\r\n\r\n  function filterGallery(selectedCategorie) {\r\n    // Parcours de toutes les images\r\n    images.forEach(function(image) {\r\n      // Récupération de la catégorie de l'image\r\n      let categorie = image.getAttribute(\"data-categorie\");\r\n      // Vérification si l'image correspond à la catégorie sélectionnée\r\n      if (categorie == selectedCategorie) {\r\n        // Affichage de l'image\r\n        image.style.display = \"block\"; \r\n      } else {\r\n        // NE pas afficher l'image\r\n        image.style.display = \"none\";\r\n      } \r\n    });\r\n\r\n  }\r\n\r\n  // Fonction pour définir un filtre actif\r\n  function setActiveFilter(activeFilter) {\r\n\r\n    // Réinitialisation de la backgroundColor de tous les filtres\r\n    filtre1.style.backgroundColor = \"\";\r\n    filtre2.style.backgroundColor = \"\";\r\n    filtre3.style.backgroundColor = \"\";\r\n    filtre4.style.backgroundColor = \"\";\r\n\r\n    // Réinitialisation de la couleur de tous les filtres\r\n    filtre1.style.color = \"\";\r\n    filtre2.style.color = \"\";\r\n    filtre3.style.color = \"\";\r\n    filtre4.style.color = \"\";\r\n\r\n    // Définition de la couleur du filtre actif\r\n    activeFilter.style.backgroundColor = \"#1D6154\";\r\n    activeFilter.style.color = \"white\";\r\n  }\r\n}\r\ncategorieJSONData();\r\n\r\n// Identification et ajout due a l'indentification \r\n  const token = localStorage.getItem('token');\r\n\r\n  // Vérifie si un token est présent dans le stockage local\r\n  function deleteToken() {\r\n    localStorage.removeItem('token');\r\n    updateLoginButton();\r\n  }      \r\n\r\n  function isLoggedIn() {\r\n    const token = localStorage.getItem('token');\r\n    return token !== null && token !== undefined;\r\n  }\r\n\r\n  function updateLoginButton() {\r\n    const loginButton = document.querySelector('#loginButton');\r\n    if (isLoggedIn()) {\r\n      // Ajout des changements sur la page d'accueil\r\n      loginButton.textContent = 'logout';\r\n      loginButton.removeAttribute('href')\r\n      // Ajout de l'événements logout\r\n      loginButton.addEventListener(\"click\", deleteToken);\r\n      addBanniereCreateur();\r\n    } else {\r\n      removeBanniereCreateur();\r\n      loginButton.textContent = 'login';\r\n      loginButton.setAttribute('href', './assets/login.html');\r\n    }\r\n  }\r\n\r\n  // Création de la banniere mode administrateur\r\n  function addBanniereCreateur() {\r\n    \r\n    let header = document.querySelector('header');\r\n    let banniere = document.querySelector('#banniereCreateur');\r\n    let modeEdition = document.createElement(\"span\");\r\n    let logopublier = document.createElement(\"span\");\r\n    let icones = document.createElement('icones');\r\n    let publier = document.createElement('span');\r\n    let pagemodal = document.createElement('a')\r\n    \r\n    banniere = document.createElement(\"div\");\r\n    banniere.id = \"banniereCreateur\";\r\n    \r\n    icones.classList = \"fa-solid fa-pen-to-square\";\r\n    icones.id = \"ModifierBanniere\";\r\n\r\n    \r\n    modeEdition.textContent = \"Mode édition\";\r\n    modeEdition.id = \"modeEditions\";\r\n\r\n    publier.id = \"publier\";\r\n    publier.classList = \"lienmodal2\"\r\n    publier.textContent = \"publier les changements\";\r\n\r\n    pagemodal.id = 'lienmodal';\r\n    pagemodal.classList = 'js-modal';\r\n    pagemodal.href = '#modal1';\r\n\r\n    banniere.appendChild(pagemodal);\r\n    header.prepend(banniere);\r\n    pagemodal.appendChild(icones);\r\n    pagemodal.appendChild(logopublier);\r\n    logopublier.appendChild(modeEdition);\r\n    banniere.appendChild(publier);\r\n  }\r\n\r\n  // Supression de la banniere si deconnecté\r\n  function removeBanniereCreateur() {\r\n    let banniere = document.querySelector('#banniereCreateur');\r\n    banniere.remove();\r\n  }\r\n\r\n  // Appel de la fonction updateLoginButton lors du chargement de la page\r\n  updateLoginButton();\r\n\r\n\r\n// Pages modals\r\nlet modal = null\r\n\r\n  // Ouverture de la page modal \r\nconst openModal = function(e) {\r\n    e.preventDefault()\r\n    \r\n    const  target = document.getElementById('modal1')\r\n    console.log(target)  \r\n    // Permet de rendre visisble la boite\r\n    target.style.display = 'block'\r\n    target.removeAttribute('aria-hidden')\r\n    target.setAttribute('aria-modal', 'true')\r\n\r\n    modal = target\r\n\r\n    modal.addEventListener('click', closeModal)\r\n    //  Arret si click sur la croix\r\n    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)\r\n    //  Arret si click en dehors de la page modal\r\n    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)\r\n}\r\n// Ouverture de la page modal qui gére l'ajout des photos\r\nconst openModal2 = function(e) {\r\n  e.preventDefault()\r\n  \r\n  const target = document.getElementById('modal2')\r\n  console.log(target)\r\n  target.style.display = 'block'\r\n  target.removeAttribute('aria-hidden')\r\n  target.setAttribute('aria-modal', 'true')\r\n\r\n  modal = target\r\n\r\n  modal.addEventListener('click', closeModal)\r\n  modal.querySelector('.js-modal-close').addEventListener('click', closeModal)\r\n  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)\r\n}\r\n\r\n\r\n// Fermeture de la page modal \r\nconst closeModal = function (e) {\r\n  if (modal === null) return\r\n  e.preventDefault()\r\n  modal.style.display = \"none\"\r\n  modal.setAttribute('aria-hidden', 'true')\r\n  modal.removeAttribute('arial-modal')\r\n  modal.removeEventListener('click', closeModal)\r\n  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)\r\n  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)\r\n  modal = null\r\n}         \r\n// Permet d'eviter que lorsque on click dans la boite modal sa ne ferme pas \r\nconst stopPropagation = function (e) {\r\n  e.stopPropagation()\r\n}\r\n// Retour en arriére si on clique sur la fléche \r\nconst fleche = document.querySelector('.fleche');\r\nfleche.addEventListener(\"click\", closeModal);\r\nfleche.addEventListener(\"click\", openModal);\r\n\r\n// Permet de pouvoir quitter la page modale avec echap\r\nwindow.addEventListener('keydown', function (e){\r\n  if (e.key === \"Escape\" || e.key === \"Esc\" ) {\r\n    closeModal(e)\r\n  }\r\n\r\n})\r\n\r\n// Selectionner l'aside \r\nconst premiermodifier = document.getElementById('premiermodifier')\r\npremiermodifier.addEventListener('click', openModal)\r\n\r\nconst secondmodifier = document.getElementById('secondmodifier')\r\nsecondmodifier.addEventListener('click', openModal)\r\nsecondmodifier.addEventListener('click', updateGallery())\r\n\r\n// Lorsque on clique sur ajout photo sa ouvre la deuxiéme page modal et ferme la premiére\r\nconst addPhoto = document.getElementById(\"addPhoto\");\r\naddPhoto.addEventListener(\"click\", closeModal);\r\naddPhoto.addEventListener(\"click\", openModal2);\r\n\r\n\r\n\r\nlet counter0 = 0;\r\n\r\n// Définition de la fonction qui met à jour la galerie avec les données fournies et qui gére la supression de chaque photo\r\nasync function updateGallery() {\r\n  // Récupération des données \r\n  const response = await fetch(\"http://localhost:5678/api/works\");\r\n  const jsonData = await response.json();\r\n  \r\n  jsonData.forEach(function(element) {\r\n    // création d'un élément figure\r\n    let figure = document.createElement(\"figure\");\r\n    // Attribution des categories de chaque photos \r\n    figure.dataset.categorie = element.category.id;\r\n    //  création de l'image \r\n    let image = document.createElement(\"img\");\r\n    image.classList = \"imgModal\"; \r\n    \r\n    // Ajout d'un paramétre d'image\r\n    image.src = element.imageUrl;\r\n            \r\n    // Ajout de l'image en tant qu'enfant dans figure\r\n    figure.appendChild(image);\r\n\r\n    // création d'un élément figcaption    \r\n    let figcaption = document.createElement(\"figcaption\");\r\n\r\n    // Création de l'icône poubelle pour la suppression de la photo\r\n    let iconePoubelle = document.createElement(\"i\")\r\n    iconePoubelle.classList = \"fa-solid fa-trash-can poubelle\"\r\n\r\n    // Ajout de la classe \"Editer\" au figcaption\r\n    figcaption.classList = \"Editer\"\r\n    // Ajout de l'icône poubelle en tant qu'enfant de la figure\r\n    figure.appendChild(iconePoubelle)\r\n\r\n    // Ajout des attributs des photos \r\n    figure.id = 'aa' + counter0;\r\n    figure.classList = 'a' + counter0;\r\n    iconePoubelle.dataset.api = element.id;\r\n\r\n    // Ajout d'un gestionnaire d'événements \"click\" sur l'icône poubelle\r\n    iconePoubelle.addEventListener('click', function() {\r\n\r\n       id = iconePoubelle.dataset.api\r\n      // Envoi de la requête DELETE à l'API pour supprimer l'image\r\n      const token = localStorage.getItem('token');\r\n      fetch(`http://localhost:5678/api/works/${id}`, {\r\n        method: 'DELETE',\r\n        headers: {\r\n          Authorization: `Bearer ${token}`\r\n        }\r\n      })\r\n      .then(response => {\r\n        if (response.ok) {\r\n          // Selectionne et suprimme les photos de la galerie \r\n          let gallery = document.querySelectorAll(\".gallery figure\");\r\n          gallery.forEach(function(element) {\r\n            element.remove();\r\n          });\r\n          \r\n          // Suppression de la figure et de l'image\r\n          figure.remove();\r\n          // Appel de la fonction qui crée la galerie\r\n          loadGallery();\r\n\r\n          // Mettre à jour la liste des poubelles\r\n          updatePoubelles(document.querySelectorAll('.poubelle'));\r\n\r\n          // Permet que a chaque supression de photo les filtres marchent \r\n          const filtres = document.querySelectorAll(\".filtres\");\r\n          filtres.forEach(function(filtre) {\r\n            filtre.remove();\r\n          });\r\n          categorieJSONData();\r\n  \r\n        } else {\r\n          throw new Error('Erreur lors de la suppression de l\\'image');\r\n        }\r\n      })\r\n      .catch(error => {\r\n        console.error(error);\r\n        alert('Une erreur est survenue lors de la suppression de l\\'image');\r\n      });\r\n      console.log('Icône poubelle cliquée');\r\n\r\n    });   \r\n    // Extraction et du texte d'un figcaption\r\n    let text = document.createTextNode('éditer');\r\n    // Ajout du text en tant qu'enfant pour figcaption\r\n    figcaption.appendChild(text);\r\n    // Ajout de figcaption en tant qu'enfant pour figure\r\n    figure.appendChild(figcaption);\r\n   \r\n    \r\n    // Création de la gallery \r\n    let gallery = document.querySelector(\".lesPhotos\");\r\n  \r\n    // Ajout de la figure en tant qu'enfant dans de la class gallery\r\n    gallery.appendChild(figure);\r\n\r\n    counter0++;\r\n  });\r\n}\r\n\r\n\r\n// Définition de la fonction qui met à jour la liste des poubelles\r\nfunction updatePoubelles(poubelles) {\r\n  poubelles.forEach(poubelle => {\r\n    poubelle.addEventListener('click', () => {\r\n      const figure = poubelle.parentNode;\r\n      const classe = figure.getAttribute('class');\r\n      // Permet de supprimer l'image correspondante à la miniature \r\n      const img = document.querySelector(`.gallery .${classe}`);\r\n      figure.remove();\r\n      if (img) {\r\n        img.remove();\r\n      }\r\n      // Mettre à jour la liste des poubelles en appelant récursivement la fonction\r\n      updatePoubelles(document.querySelectorAll('.poubelle'));\r\n    });\r\n  });\r\n}\r\n    \r\n// Récupération de toutes les poubelles\r\nconst poubelles = document.querySelectorAll('.poubelle');\r\n\r\nfunction refreshGallery() {\r\n  fetch('http://localhost:5678/api/works')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      // Appel de la fonction updateGallery avec les nouvelles données\r\n      updateGallery(data);\r\n    })\r\n    .catch(error => {\r\n      console.error(error);\r\n      alert('Une erreur est survenue lors de la récupération des images');\r\n    });\r\n}\r\n\r\n// Déposer une photo sur le page modal publier les changements \r\n\r\nconst dropArea = document.getElementById(\"drop-area\");\r\nconst addPhotoBtn = document.querySelector(\".add-photo\");\r\n\r\n// Ajout d'une nouvelle photo\r\nfunction addNewPhoto() {\r\n  // Recréer les éléments HTML pour ajouter une nouvelle photo\r\n  const AjoutImg = document.createElement(\"div\");\r\n  AjoutImg.id = \"AjoutImg\";\r\n\r\n  const newFileInput = document.createElement(\"input\");\r\n  newFileInput.type = \"file\";\r\n  newFileInput.id = \"file-input\";\r\n  newFileInput.accept = \".jpg, .jpeg, .png\";\r\n  newFileInput.multiple = true;\r\n\r\n  const newIconLabel = document.createElement(\"label\");\r\n  const newIcon = document.createElement(\"i\");\r\n  newIcon.classList.add(\"fa-solid\", \"fa-image\");\r\n  newIconLabel.appendChild(newIcon);\r\n\r\n  const newAddPhotoLabel = document.createElement(\"label\");\r\n  newAddPhotoLabel.htmlFor = \"file-input\";\r\n  newAddPhotoLabel.classList.add(\"add-photo\");\r\n  newAddPhotoLabel.textContent = \"+ Ajouter photo\";\r\n\r\n  const newFileTypeSpan = document.createElement(\"span\");\r\n  newFileTypeSpan.classList.add(\"file-type\");\r\n  newFileTypeSpan.textContent = \"JPG, PNG : 4 Mo max\";\r\n\r\n  AjoutImg.appendChild(newFileInput);\r\n  AjoutImg.appendChild(newIconLabel);\r\n  AjoutImg.appendChild(newAddPhotoLabel);\r\n  AjoutImg.appendChild(newFileTypeSpan);\r\n\r\n  // Ajouter le nouvel élément HTML à la page\r\n  dropArea.appendChild(AjoutImg);\r\n\r\n  // Ajouter un gestionnaire d'événements pour le champ de fichier\r\n  newFileInput.addEventListener(\"change\" , function(e) {\r\n    const files = e.target.files;\r\n    if (files.length > 0) {\r\n      const file = files[0];\r\n      console.log(file);\r\n      console.log(files)\r\n      // Afficher la photo dans le drop-area\r\n      const img = document.createElement(\"img\");\r\n      img.src = URL.createObjectURL(file);\r\n      img.style.maxHeight = \"100%\";\r\n      img.style.maxWidth = \"100%\";\r\n      newIconLabel.remove();\r\n      newAddPhotoLabel.remove();\r\n      newFileTypeSpan.remove();\r\n      dropArea.appendChild(img);\r\n    }\r\n  });\r\n\r\n}\r\n// Appeler la fonction au besoin\r\naddNewPhoto();\r\n\r\n// Ajout du bouton valider dynamique \r\n\r\nconst boutonvalider = document.getElementById(\"boutonValider\");\r\nconst titreInput = document.getElementById(\"titre\");\r\nconst categorieInput = document.getElementById(\"categorie\");\r\nconst fileInput = document.getElementById(\"file-input\");\r\n\r\n// Fonction pour mettre à jour l'état du bouton Valider\r\nfunction updateSubmitButtonState() {\r\n  const titre = titreInput.value;\r\n  const categorie = categorieInput.value;\r\n  const files = fileInput.files;\r\n\r\n  if (titre && categorie && files.length) {\r\n    boutonvalider.style.backgroundColor = \"#1D6154\";\r\n    boutonvalider.style.color = \"white\";\r\n  } else {\r\n    boutonvalider.style.backgroundColor = \"\"; // Remettre la couleur par défaut\r\n    boutonvalider.style.color = \"\"; // Remettre la couleur par défaut\r\n  }\r\n}\r\n\r\n// Écouter les modifications des champs\r\ntitreInput.addEventListener(\"input\", updateSubmitButtonState);\r\ncategorieInput.addEventListener(\"input\", updateSubmitButtonState);\r\nfileInput.addEventListener(\"change\", updateSubmitButtonState);\r\n\r\n\r\nconst form = document.getElementById(\"formulaireAjoutPhoto\");\r\n\r\nform.addEventListener(\"submit\", (event) => {\r\n  event.preventDefault(); // Empêcher l'envoi normal du formulaire\r\n\r\n  // Déclaration de tout les constantes utiles \r\n  const titre = document.getElementById(\"titre\").value;\r\n  const categorie = document.getElementById(\"categorie\").value;\r\n  const fileInput = document.getElementById(\"file-input\");\r\n  const files = fileInput.files;\r\n\r\n\r\n  // Vérifier que tous les champs sont remplis\r\n  console.log(categorie)\r\n  if (!titre || !categorie || !files.length) {\r\n    alert(\"Veuillez remplir tous les champs !\");\r\n    return;\r\n  } \r\n  \r\n  // Attribuer l'ID de la catégorie en fonction de son nom\r\n  let categoryId;\r\n  if (categorie === \"Objets\") {\r\n    categoryId = 1;\r\n  } else if (categorie === \"Appartements\") {\r\n    categoryId = 2;\r\n  } else if (categorie === \"Hotels & Restaurant\") {\r\n    categoryId = 3;\r\n  }\r\n\r\n  // Créer un objet FormData pour envoyer les données du formulaire\r\n  const formData = new FormData();\r\n  formData.append(\"title\", titre);\r\n  formData.append(\"category\", categoryId);\r\n  if (files && files.length > 0) {\r\n      formData.append(\"image\", files[0]);\r\n  }\r\n\r\n  const token = localStorage.getItem('token');\r\n\r\n  fetch(\"http://localhost:5678/api/works\", {\r\n    method: 'POST',\r\n    headers: {\r\n      Authorization: `Bearer ${token}`\r\n    },\r\n    body: formData\r\n  })\r\n  .then((response) => response.json())\r\n  .then((data) => {\r\n\r\n        // Créer un nouvel élément figure pour le projet ajouté\r\n        const newFigure = document.createElement('figure');\r\n        let gallery = document.querySelector(\".gallery\");\r\n\r\n        // Ajouts des attributs \r\n        newFigure.id = 'aa' + counter0;\r\n        newFigure.classList = 'a' + counter0;\r\n        newFigure.setAttribute('data-categorie', categoryId); \r\n\r\n        // Ajours des attributs de l'image \r\n        const newImage = document.createElement('img');\r\n        newImage.src = data.imageUrl;\r\n        newImage.alt = data.title;\r\n        newFigure.appendChild(newImage);\r\n\r\n        // Ajout du texte de l'image\r\n        const newCaption = document.createElement('figcaption');\r\n        const newCaptionText = document.createTextNode(data.title);\r\n        newCaption.appendChild(newCaptionText);\r\n        newFigure.appendChild(newCaption);\r\n\r\n        // Ajouter le nouvel élément à la galerie\r\n        gallery.appendChild(newFigure);\r\n\r\n        console.log(data); \r\n\r\n        // Réinitialiser les champs du formulaire\r\n        const image = document.querySelector(\"#drop-area img\");\r\n        if (image) {\r\n          image.remove();\r\n        }\r\n        form.reset();\r\n        fileInput.value = '';\r\n        const AjoutImg = document.getElementById(\"AjoutImg\"); \r\n        AjoutImg.remove();\r\n        // Recreer le formulaire \r\n        addNewPhoto();\r\n\r\n        // Réinitialiser la gallerie \r\n        const lesphotos = document.querySelectorAll(\".lesPhotos figure\");\r\n        lesphotos.forEach((figure) => {\r\n          figure.remove();\r\n        });\r\n\r\n        // Rafraichie la gallerie\r\n        refreshGallery();\r\n\r\n        // Réinitialiser les filtres\r\n        categorieJSONData();\r\n\r\n          \r\n  })\r\n  .catch((error) => console.error(error));\r\n});\r\n\n\n//# sourceURL=webpack://projet-sophie-bluel/./FrontEnd/assets/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./FrontEnd/assets/index.js"]();
/******/ 	
/******/ })()
;