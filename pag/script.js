
// loader //

window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  loader.style.transition = "all .5s"
  loader.style.opacity = 0;
  loader.style.top = "-99px"
  let display = setTimeout(()=>{
     loader.style.display = "none"
     clearTimeout(display)}, 1000)
  console.log("la pagina cargó correctamente");
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
    div2.style.margin = "3px auto";
  } else {
    div2.style.width = "3px";
    div2.style.margin = "3px auto";
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

  if (navSecundario.style.left == "-45%") {
    navSecundario.style.left = "0%"
  } else if (navSecundario.style.left == "0%"){
    navSecundario.style.left = "-45%"
  }
});


//fin nav 

//mostrar proyectos

function mostrar(event) {
  var elemento = event.target;
  var divImg = elemento.parentElement;

  if (divImg.classList.contains("mostrar")) {
    divImg.classList.remove("mostrar")
    divImg.classList.add("ocultar")
  } else {
    divImg.classList.add("mostrar")
    divImg.classList.remove("ocultar")
  }

  if (elemento.style.transform == "rotateX(180deg)") {
    elemento.style.transform = "rotateX(0deg)"
  } else {
    elemento.style.transform = "rotateX(180deg)"
  }
}

const overlay1 = document.querySelector(".img-1").addEventListener("click", mostrar)
const overlay2 = document.querySelector(".img-2").addEventListener("click", mostrar)
const overlay3 = document.querySelector(".img-3").addEventListener("click", mostrar)

//fin mostrar proyectos

// validar formulario

const btn = document.getElementById('button');
const inputNombre = document.getElementById("from_name")
const inputMensaje = document.getElementById("message")
const inputEmail = document.getElementById("email_id")

const toastCont = document.getElementById("toast")
function addNotification(state, message) {
  const fragment = document.createDocumentFragment()
  const notifToast = document.createElement("div")
  notifToast.setAttribute("id", `${toastCont.children.length}-num`)
  notifToast.classList.add("toast-element")
  notifToast.classList.add("st" + state)
  const toastMsg = document.createElement("p")
  toastMsg.textContent = message
  const noShowBar = document.createElement("span")
  noShowBar.classList.add("loadtoast")
  const closeToast = document.createElement("span")
  closeToast.classList.add("close-toast")
  closeToast.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  
  notifToast.appendChild(closeToast)
  notifToast.appendChild(noShowBar)
  notifToast.appendChild(toastMsg)
  fragment.appendChild(notifToast)
  toastCont.appendChild(fragment)
  let value = 0
  const loadtoast = setInterval(() => {
    value += .125
    noShowBar.style.width = `${value}%`
    if (noShowBar.offsetWidth >= notifToast.offsetWidth) {
      notifToast.classList.add("hidetoast")
      clearInterval(loadtoast)
    }
  }, 1);
  closeToast.addEventListener("click", ()=>{
    notifToast.classList.add("hidetoast")
    clearInterval(loadtoast)
  })
}
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  addNotification(1, "tu mail se está enviando...")
  btn.value = 'Enviando...';
  
  const serviceID = 'default_service';
  const templateID = 'template_kv1mzke';
  
  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    inputNombre.value = ""
    inputMensaje.value = ""
    inputEmail.value = ""
    btn.value = 'Enviar Email';
    addNotification(2, "tu mail fue enviado con éxito")  
  }, (err) => {
    btn.value = 'Enviar  Email';
    addNotification(0, "hubo un error al enviar tu mail")  
  });
});

// fin validar formulario