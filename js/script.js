let selectedRating = 0;

// Selectionner tout les éléments qui ont cette classe 
let notes = document.querySelectorAll('.card__note--btn');

// Parcourir tout les éléments
notes.forEach(function(note) {
    // Détecter quand on clic sur l'element
    note.addEventListener('click', e => {
        // On sélectionne l'élément qui a été précédement cliquer
        let noteSelected = document.querySelector('.card__note--btn.check');
        
        // Si on a trouver un élément qui a la classe check (qui été cliqué avant)
        if (noteSelected) {
            // On retire la classe de l'élément précédemment cliqué
            noteSelected.classList.remove('check');
        }

        // On ajoute la classe sur l'élément qui a été cliquer
        note.classList.add('check');

        // On va enregistrer le chiffre
        selectedRating = note.textContent;
    })
});

// Récupérer l'élément html bouton SUBMIT
let button = document.querySelector('.card__btn');

// On détecte le clic sur le bouton
button.addEventListener('click', e => {
    // On récupère la carte de base
    let card = document.querySelector('.card');

    // On cache la carte avec un display none comme en CSS
    card.style.display = 'none';

    // On récupère la carte de remerciement
    let thankCard = document.querySelector('.card__thanks');

    // On affiche la carte de remerciement
    thankCard.style.display = 'block';

    let rating = document.querySelector('#rating');
    rating.textContent = selectedRating;
})