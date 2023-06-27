
// loader //

window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  loader.style.transition = "all .5s"
  loader.style.opacity = 0;
  loader.style.top = "-99px"
  let display = setTimeout(()=>{
     loader.style.display = "none"
     clearTimeout(display)}, 1000)
  
});

//fin loader

// Obtener todos los contenedores de imágenes
const contenedoresImagenes = document.querySelectorAll('.proyecto > div[id^="link-img"]');

// Función que se ejecuta cuando se hace hover sobre el contenedor de la imagen
function agregarElementoLink() {
  // Crear un elemento <a> para el enlace
  const enlace = document.createElement('a');

  // Establecer el atributo href del enlace
  enlace.href = '#'; // Puedes establecer aquí la URL a la que deseas que apunte el enlace

  // Crear un elemento <i> para el ícono
  const iconoLink = document.createElement('i');

  // Agregar las clases de Font Awesome al ícono
  iconoLink.classList.add('fa', 'fa-solid', 'fa-link');

  // Agregar el ícono al enlace
  enlace.appendChild(iconoLink);

  // Agregar el enlace al contenedor de la imagen
  this.appendChild(enlace);
}

// Función que se ejecuta cuando se deja de hacer hover sobre el contenedor de la imagen
function eliminarElementoLink() {
  // Obtener el enlace creado durante el hover
  const enlace = this.querySelector('a');

  // Eliminar el enlace si existe
  if (enlace) {
    enlace.remove();
  }
}

// Agregar los event listeners para cada contenedor de imagen
contenedoresImagenes.forEach((contenedor) => {
  contenedor.addEventListener('mouseenter', agregarElementoLink);
  contenedor.addEventListener('mouseleave', eliminarElementoLink);
});



//fin mostrar proyectos 

// validar formulario

const btn = document.getElementById('button');
const inputNombre = document.getElementById("from_name")
const inputMensaje = document.getElementById("message")
const inputEmail = document.getElementById("email_id")

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_kv1mzke';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      inputNombre.value = ""
      inputMensaje.value = ""
      inputEmail.value = ""
      btn.value = 'Enviar Email';
      alert('El Email fue enviado con exito');
    }, (err) => {
      btn.value = 'Enviar  Email';
      alert(JSON.stringify(err));
    });
});

// fin validar formulario