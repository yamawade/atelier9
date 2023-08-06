document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
        }

        // Vider les champs du formulaire après soumission réussie
        // document.getElementById('name').value = '';
        // document.getElementById('email').value = '';
        // document.getElementById('message').value = '';
    });
});
