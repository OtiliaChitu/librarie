window.onload = function()
{
    
    function afisareFavorite()
    {
        const container = document.getElementById("carti_favorite");
        container.innerHTML = '';

        const scris = document.getElementById("scris");

        const favorite = JSON.parse(localStorage.getItem('fav')) || []; //lista de favorite

        //parcurg lista si creez cate un elem nou pt fiecare carte

        if(favorite.lenght === 0)
            {
                scris.style.display = 'block';
            }
            else{
                scris.style.display = 'none';

                favorite.forEach(carte => {
                    const card = document.createElement('div');
                    card.classList.add('fav-card');
        
                    const cop = document.createElement('img');  //coperta
                    cop.src = carte.coperta;
                    cop.alt = carte.titlu;
                    card.appendChild(cop);
        
                    const t = document.createElement('p');  //titlul
                    t.textContent = carte.titlu;
                    card.appendChild(t);
        
                    

                    // creare si adaugare div ur pentru ...

                    const detalii = localStorage.getItem('detalii');
                    const data = localStorage.getItem('data');
                    const parere = localStorage.getItem('parere');

                    
                    const detaliiDiv = document.createElement('div');
                    detaliiDiv.textContent = 'Detalii: ' + detalii;
                    card.appendChild(detaliiDiv);

                    
                    const dataDiv = document.createElement('div');
                    dataDiv.textContent = 'Data: ' + data;
                    card.appendChild(dataDiv);

                    
                    const parereDiv = document.createElement('div');
                    parereDiv.textContent = 'Parere: ' + parere;
                    card.appendChild(parereDiv);




                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Șterge';
                    deleteButton.classList.add('delete-button');
                    deleteButton.setAttribute('data-title', carte.titlu);

                    deleteButton.addEventListener('click', function() {
                        const titlu = this.getAttribute('data-title');
                        stergeCarte(titlu);
                        afisareFavorite();  // actualizare lista
                    });

                    card.appendChild(deleteButton);


                    container.appendChild(card);

                });
            }
    }

    



    function stergeCarte(titlu) {
        let fav = JSON.parse(localStorage.getItem('fav')) || [];
        
        fav = fav.filter(carte => carte.titlu !== titlu);   // filtrez lista pentru a elimina cartea cu titlul resp
        localStorage.setItem('fav', JSON.stringify(fav));   // actualizare lista in localStorage

        setTimeout(function() {
            alert('Cartea a fost stearsa!');
        }, 2000);
    }


    afisareFavorite();


    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'r':
                document.body.style.backgroundColor = 'red';
                break;
            case 'g':
                document.body.style.backgroundColor = 'green';
                break;
            case 'b':
                document.body.style.backgroundColor = 'blue';
                break;
            case 'y':
                document.body.style.backgroundColor = 'yellow';
                break;
            default:
                document.body.style.backgroundColor = '#FDF0F6';
                break;
        }
    });
}