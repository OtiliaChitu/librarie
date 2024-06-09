window.onload = function()
{
    Array.from(document.getElementsByClassName('adaugare')).forEach(button => {
        button.addEventListener("click", adaugaFavorite);
        button.addEventListener("mouseenter", function(event){
            this.style.color = 'red';
            event.stopPropagation();    //????????????????????????????????????????????
            
        });
        button.addEventListener("mouseleave", function(){
            if(!this.classList.contains('added')){
                this.style.color = 'white';
            }
        })
    });

    function adaugaFavorite(event)
    {
        //event.stopPropagation();
        
        //cu local storage 

        const carte = this.parentElement;
        const titlu = carte.querySelector('p').textContent;
        const coperta = carte.querySelectorAll('img')[0].src;

        const book = 
        {
            titlu: titlu,
            coperta: coperta
        }

        const bookJSON = JSON.stringify(book);

        let fav = JSON.parse(localStorage.getItem('fav')) || [];  //iau informatia din locat storage

        const carteNoua = {titlu, coperta};   //creez un nou obiect

        if(!fav.some(c => c.titlu === titlu && c.coperta === coperta))
            {
                fav.push(carteNoua);
                localStorage.setItem('fav', JSON.stringify(fav));
                this.style.color = 'red';
                this.classList.add('added');
                alert('Cartea a fost adaugata la favorite!');

               /* document.querySelectorAll('.adaugare').forEach(button => {
                    button.addEventListener('click', function() {
                        window.location.href = 'formular.html';
                    });
                }); */

            } else {alert('Cartea este deja in favorite!');}
        
        
            //});

        /*
        const buttons = document.querySelectorAll('.adaugare');
        buttons.forEach(button => {
            if (button === event.target) {
                button.style.color = 'red';
            })
            */

        
        /* this.style.color = 'red';
        alert('Cartea a fost adaugata la favorite!'); */
    }
    
    document.querySelectorAll('.adaugare').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'formular.html';
        });
    });
    
    // modificarea stilului unui element

    Array.from(document.getElementsByClassName('adaugare')).forEach(button => 
    {
       
        button.style.borderRadius = '50%';
        button.style.borderColor = '#9d657f';
        button.style.backgroundColor = 'pink'; 

        button.innerHTML = '&#10084;'; // cod HTML pentru inima

        button.style.fontSize = '24px'; 
        //button.style.color = 'red'; 
        button.style.color = 'white';
    });

   // localStorage.clear();

}





    





    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.adaugare');
        
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookTitle = event.target.previousElementSibling.getAttribute('data-title');
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                
                if (!favorites.includes(bookTitle)) {
                    favorites.push(bookTitle);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                }
            });
        });
    });
    