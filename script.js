document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los enlaces de navegación y el botón de explorar proyectos
    document.querySelectorAll("nav a, .cta-button").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Envío de correo desde formulario
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        const mailto = `mailto:ignisquare@gmail.com?subject=Mensaje de ${nombre}&body=${mensaje}%0D%0A%0D%0ACorreo: ${email}`;
        
        window.location.href = mailto;
    });

    // Cambio de color del header al hacer scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
