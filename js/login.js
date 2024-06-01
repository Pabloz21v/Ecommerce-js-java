document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let valid = true;

        // Validación del nombre
        if (name === '') {
            setInvalid('name', 'El nombre es obligatorio.');
            valid = false;
        } else {
            setValid('name');
        }

        // Validación del correo electrónico
        if (!isValidEmail(email)) {
            setInvalid('email', 'Por favor, introduce un correo electrónico válido.');
            valid = false;
        } else {
            setValid('email');
        }

        // Validación de la contraseña
        if (password.length < 8) {
            setInvalid('password', 'La contraseña debe tener al menos 8 caracteres.');
            valid = false;
        } else {
            setValid('password');
        }

        // Si todos los campos son válidos, puedes enviar el formulario o procesar los datos
        if (valid) {
            // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
            form.reset(); // Resetea el formulario después de un registro exitoso

        }
    });

    function setInvalid(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add('is-invalid');
        field.nextElementSibling.textContent = message;
    }

    function setValid(fieldId) {
        const field = document.getElementById(fieldId);
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }

    function isValidEmail(email) {
        // Expresión regular simple para validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


