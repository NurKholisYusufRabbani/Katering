// Filter menu items by category
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.menu-category');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah teleport
            const categoryId = this.getAttribute('href').substring(1);

            // Gulir ke kategori yang dipilih
            const categoryElement = document.getElementById(categoryId);
            if (categoryElement) {
                categoryElement.scrollIntoView({ behavior: 'smooth' });

                // Mengatur kelas aktif
                categories.forEach(cat => cat.classList.remove('active'));
                categoryElement.classList.add('active');
            }
        });
    });
});
