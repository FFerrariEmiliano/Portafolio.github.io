
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

//nav 
const ul = document.querySelector("#lista-barras");

ul.addEventListener("click", function() {
  const div1 = ul.querySelector("#barra-1");
  const div2 = ul.querySelector("#barra-2");
  const div3 = ul.querySelector("#barra-3");
  const div4 = ul.querySelector("#barra-4");

  if (div1.style.width === "40px") {
    div1.style.width = "3px";
    div1.style.margin = "0px"
    div1.style.opacity = 0
  } else {
    div1.style.width = "40px";
    div1.style.margin = "3px auto"
    div1.style.opacity = 1
  }

  if (div2.style.width === "40px") {
    div2.style.width = "3px";
    div2.style.margin = "0px auto";
    setTimeout(() => {
      div2.style.width = "40px";
      div2.style.margin = "3px auto";
    }, 300);
  } else {
    div2.style.width = "3px";
    div2.style.margin = "3px auto";
    setTimeout(() => {
      div2.style.width = "3px";
    }, 10);
  }

  if (div3.style.opacity == 0) {
    div3.style.opacity = 1
  } else if (div3.style.opacity == 1) {
    div3.style.opacity = 0
  }

  if (div4.style.width === "40px") {
    div4.style.width = "3px";
    div4.style.margin = "0px"
    div4.style.opacity = 0
  } else {
    div4.style.width = "40px";
    div4.style.margin = "3px auto";
    div4.style.opacity = 1;
  }

  const contBarras = document.querySelector("#cont-barras")

  if(contBarras.style.transform === "rotate(0deg)"){
    contBarras.style.transform = "rotate(135deg)";
  } else if (contBarras.style.transform === "rotate(135deg)"){
    contBarras.style.transform = "rotate(0deg)";
  }

  const navSecundario = document.querySelector("#nav-secundario")

  if (navSecundario.style.left == "-35%") {
    navSecundario.style.left = "0%"
  } else if (navSecundario.style.left == "0%"){
    navSecundario.style.left = "-35%"
  }
});


//fin nav 

//mostrar proyectos


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