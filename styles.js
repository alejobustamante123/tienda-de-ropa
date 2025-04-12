document.querySelector('nav a[href="#ropa"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ropa-section').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('nav a[href="#accesorios"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('accesorios-section').scrollIntoView({
        behavior: 'smooth'
    });
});