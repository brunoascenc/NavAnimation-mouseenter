const navAnimation = () => {
    const sections = document.querySelectorAll('section');
    const navs = document.querySelectorAll('nav a');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function () { // N Funciona em mobile
            // Pega os ids das sections
            const id = this.getAttribute('id');
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navs.forEach(a => a.classList.remove('active'));
            navActive.classList.add('active');
        });
    });
}

navAnimation();