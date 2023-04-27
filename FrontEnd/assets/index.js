
async function figureJSONData() {
    const response = await fetch("http://localhost:5678/api/works");
    const jsonData = await response.json();
    console.log(jsonData);
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

    });


    // Récupération des infos des différentes catégories
    const responseCategories = await fetch("http://localhost:5678/api/categories");
    const jsonDataCategories = await responseCategories.json();
    console.log(jsonDataCategories);
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

      // Vérifie si un token est présent dans le stockage local
      function isLoggedIn() {
        const token = localStorage.getItem('token');
        return token !== null && token !== undefined;
      }

      function deleteToken() {
        localStorage.removeItem('token');
        updateLoginButton();
      }

  

      function updateLoginButton() {
        const loginButton = document.querySelector('#loginButton');
        if (isLoggedIn()) {
          loginButton.textContent = 'logout';
          loginButton.removeAttribute('href')
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
        let img = document.createElement('img');
        let publier = document.createElement('span');
        let pagemodal = document.createElement('a')
        
        banniere = document.createElement("div");
        banniere.id = "banniereCreateur";
        
        img.src = ".\assets\images\note-square-outlined-button-with-a-pencil.png";
        
        modeEdition.textContent = "Mode édition";
        modeEdition.id = "modeEditions";

        publier.id = "publier";
        publier.textContent = "publier les changements";

        pagemodal.id = 'lienmodal';
        pagemodal.classList = 'js-modal';
        pagemodal.href = '#modal1';

        banniere.appendChild(pagemodal);
        header.prepend(banniere);
        pagemodal.appendChild(img);
        pagemodal.appendChild(logopublier);
        logopublier.appendChild(modeEdition);
        banniere.appendChild(publier);
      }

      // Création de la page modale 

      function removeBanniereCreateur() {
        let banniere = document.querySelector('#banniereCreateur');
        banniere.remove();
      }

      

      // Appel de la fonction updateLoginButton lors du chargement de la page
      updateLoginButton();

      // Page modal

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

      // Permet de pouvoir quitter la page modale avec echa
      window.addEventListener('keydown', function (e){
        if (e.key === "Escape" || e.key === "Esc" ) {
          closeModal(e)
        }

      })

      // Selectionner l'aside 
      document.getElementById('lienmodal').addEventListener('click', openModal)


      //Ajout de l'emplacement des photos
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

        let iconePoubelle = document.createElement("i")
        iconePoubelle.classList = "fa-solid fa-trash-can poubelle"

        figcaption.classList = "Editer"

        image.appendChild(iconePoubelle)

        
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

  
      });
      
      


          



  }
figureJSONData()


