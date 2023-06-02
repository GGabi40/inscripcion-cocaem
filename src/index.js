import './assets/css/style.css';

/* formulario */

// --OK Habilitar "sociedad" cuando se toque que es un miembro
// -- OK Si presenta trabajo científico, dblock a <span> con mail
// de científico
// Crear objeto con persona al momento de enviar form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formulario-inscripcion');
    const submitButton = document.getElementById('submit');

    const attentionSpan = document.getElementById('attention');
    const presentaTrabajoRadio = document.querySelector('input[name="presenta-trabajo"]');

    const miembroRadio = document.querySelector('input[name="memberFaces"]');
    const espaciodeSociedades = document.querySelector('.input--sociedad');
    espaciodeSociedades.style.display = "none";

    const nombreSociedad = document.querySelector('.member-sociedad');
    
    // Cambios en formulario
    form.addEventListener('change', () => {
        // Habilita span
        if(presentaTrabajoRadio.checked) {
            attentionSpan.style.display ='block';
            submitButton.title = 'Debe leer Bases Y Condicones.'
            submitButton.disabled = true;
        } else {
            attentionSpan.style.display = 'none';
            submitButton.title = '';
            submitButton.disabled = false;
        }

        // Habilita select
        if (miembroRadio.checked) {
            espaciodeSociedades.style.display = "block";
        } else {
            espaciodeSociedades.style.display = "none";
            nombreSociedad.value = "";
        }
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.querySelector('#name').value;
        const apellido = document.querySelector('#surname').value;
        const dni = document.querySelector('#dni').value;
        const tel = document.querySelector('#tel-number').value;
        const mail = document.querySelector('#input--mail').value;

        const persona = {
            name: nombre,
            surname: apellido,
            dni: dni,
            tel: tel,
            email: mail,
            miembro: miembroRadio.value,
            sociedad: nombreSociedad.value,
        }

        alert(`Hola, ${persona.name}`);
    })
});