const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Redirect to landing page after successful login
    window.location.href = 'landing.html';

}


);
