// document.addEventListener("DOMContentLoaded", function () {
//     const adminElement = document.getElementById("adminElement");
//     const adminModal = document.getElementById("adminModal");
//     const closeModal = document.getElementById("closeModal");

//     adminElement.addEventListener("click", function () {
//         adminModal.style.display = "block";
//     });

//     closeModal.addEventListener("click", function () {
//         adminModal.style.display = "none";
//     });

//     window.addEventListener("click", function (event) {
//         if (event.target === adminModal) {
//             adminModal.style.display = "none";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const adminElement = document.getElementById("adminElement");
    const adminModal = document.getElementById("adminModal");
    const closeModal = document.getElementById("closeModal");
    const contactForm = document.getElementById("contactForm");

    adminElement.addEventListener("click", function () {
        adminModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        adminModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === adminModal) {
            adminModal.style.display = "none";
        }
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Obtener los datos del formulario
        const formData = new FormData(contactForm);
        const contactData = {};
        formData.forEach((value, key) => {
            contactData[key] = value;
        });

        // Enviar los datos del contacto al servidor (aquí deberías hacer una solicitud POST al endpoint correspondiente)
        fetch('/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al crear contacto');
        })
        .then(data => {
            console.log('Contacto creado:', data);
            adminModal.style.display = "none"; // Cerrar el modal después de crear el contacto
        })
        .catch(error => {
            console.error('Error:', error);
            // Aquí puedes mostrar un mensaje de error al usuario si la creación del contacto falla
        });
    });
});
