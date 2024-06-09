window.onload = function()
{
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();                                   // Prevenim acțiunea implicită de trimitere a formularului

        const detalii = document.getElementById('detalii').value;
        const data = document.getElementById('data').value;
        const parere = document.getElementById('parere').value;

        const detaliiRegex = /^[a-zA-Z\s]+$/;
        if (!detaliiRegex.test(detalii)) {
            alert('Vă rugăm să introduceți doar litere și spații în câmpul de detalii.');
            return;
        }

        // salvare în localStorage
        localStorage.setItem('detalii', detalii);
        localStorage.setItem('data', data);
        localStorage.setItem('parere', parere);

        window.location.href = 'favorite.html'; 
    });

    // verif daca exista date salvate în localStorage
    const detalii = localStorage.getItem('detalii');
    const data = localStorage.getItem('data');
    const parere = localStorage.getItem('parere');

    // afissare date
    if (detalii) {
        document.getElementById('detalii').value = detalii;
        document.getElementById('data').value = data;
        document.getElementById('parere').value = parere;
    }
}