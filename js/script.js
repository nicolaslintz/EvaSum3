function validar() {
  var ret_email= validar_email();
  var ret_usuario= validar_usuario();
  var ret_contrasena= validar_contrasena();
  var ret_direccion= validar_direccion();
  var ret_telefono= validar_telefono();
  var ret_pasatiempo= validar_pasatiempo();
  var ret_url= validar_url();
  return ret_email && ret_usuario && ret_contrasena && ret_direccion && ret_telefono && ret_pasatiempo && ret_url;
}

function validar_email() {
  var email= document.getElementById("email").value;
  var div= document.getElementById("err_email");
  var arroba= email.indexOf("@");
  var punto= email.indexOf(".");
  if (arroba < 1) {
      div.innerHTML= "El correo electronico no tiene @ (arroba)";
      div.className= "text-danger";
      return false;         
  } else {
      if (arroba < 2) {
          div.innerHTML= "El nombre de usuario del correo no es valido";
          div.className= "text-danger";
          return false;              
      } else {
          if (arroba + 3 > punto || punto + 1 >= email.length - 1) {
              div.innerText = "El nombre de dominio no es valido";
              div.className = "text-danger";
              return false;
          } else {
              div.innerText= "";
              return true; 
          }
      }      
  }
}

function validar_usuario() {
  var usuario= document.getElementById("usuario").value;
  var div= document.getElementById("err_usuario");
  if (usuario == "") {
      div.innerHTML= "El nombre no puede estar en blanco";
      div.className= "text-danger";
      return false;
  } else {
      if (usuario.length > 10) {
          div.innerText= "El nombre no puede tener mas de 10 caracteres";
          div.className= "text-danger";
          return false;
      } else {
          div.innerText= "";
          return true;
      }
  }
}

function validar_contrasena(contrasena, confirmar) {
  var contrasena= document.getElementById("contrasena").value;
  var div= document.getElementById("err_contrasena");
  var confirmar= document.getElementById("confirmar").value;
  var div= document.getElementById("err_confirmar");
  if (!contrasena || !confirmar) {
    div.innerHTML= "La contraseña y la confirmación son obligatorias";
    div.className= "text-danger";
    return false;
  }
  if (contrasena.length < 3 || contrasena.length > 6) {
    div.innerText= "La contraseña debe tener entre 3 y 6 caracteres";
    div.className= "text-danger";
    return false;
  }
  if (!/\d/.test(contrasena) || !/[a-zA-Z]/.test(contrasena)) {
    div.innerText= "La contraseña debe contener al menos un dígito y una letra";
    div.className= "text-danger";
    return false;
  }
  if (contrasena !== confirmar) {
    div.innerText= "La confirmación de la contraseña no coincide";
    div.className= "text-danger"
    return false;
  }
  div.innerText= "";
  return true;
}
const contrasena = "Abc123";
const confirmar = "Abc123";

const resultado = validar_contrasena(contrasena, confirmar);
console.log(resultado);

function validar_direccion() {
  var direccion= document.getElementById("direccion").value;
  var div= document.getElementById("err_direccion");
  if (direccion == "") {
    div.innerHTML= "La dirección no puede estar en blanco";
    div.className= "text-danger";
    return false;
  } else {
    if (usuario.length > 30) {
      div.innerText= "El nombre no puede tener mas de 30 caracteres";
      div.className= "text-danger";
      return false;
  } else {
      div.innerText= "";
      return true;
    }
  }
}

function validar_telefono() {
  var telefono= document.getElementById("telefono").value;
  var div= document.getElementById("err_telefono");
  if (telefono == "") {
    div.innerHTML= "El telefono no puede estar en blanco";
    div.className= "text-danger";
    return false;
  } else {
    if (telefono.length === 9) {
      div.innerText= "";
      div.className= "text-danger";
      return true;
    } else {
      div.innerText= "El telefono tiene que tener 12 dígitos";
      return false;
    }
  }
}

function validar_pasatiempo() {
  const pasatiempo1Input = document.getElementById('pasatiempo1');
  const pasatiempo2Input = document.getElementById('pasatiempo2');
  const pasatiempo3Input = document.getElementById('pasatiempo3');
  var div= document.getElementById("err_pasatiempo");

  const pasatiempo1 = pasatiempo1Input.value.trim();
  const pasatiempo2 = pasatiempo2Input.value.trim();
  const pasatiempo3 = pasatiempo3Input.value.trim();

  let contadorPasatiempos = 0;

  if (pasatiempo1 !== '') {
    contadorPasatiempos++;
  } else {
    mostrarError(pasatiempo1Input, 'Debe ingresar al menos dos pasatiempos.');
  }

  if (pasatiempo2 !== '') {
    contadorPasatiempos++;
  } else {
    mostrarError(pasatiempo2Input, 'Debe ingresar al menos dos pasatiempos.');
  }

  if (pasatiempo3 !== '') {
    contadorPasatiempos++;
  }

  if (contadorPasatiempos < 2) {
    mostrarError(pasatiempo3Input, 'Debe ingresar al menos dos pasatiempos.');
  } else {
    console.log('Pasatiempos válidos.');
  }
};

function mostrarError(elemento, mensaje) {
  elemento.classList.add('input-error');
  const mensajeError = document.createElement('span');
  mensajeError.classList.add('error');
  mensajeError.innerText = mensaje;

  elemento.parentNode.appendChild(mensajeError);
}

function limpiarMensajeError() {
  const elementosError = document.querySelectorAll('.error');
  elementosError.forEach(function(elemento) {
    elemento.parentNode.removeChild(elemento);
  });
}

function validar_url() {
  var div= document.getElementById("err_url");
  limpiarMensajeError();

  const urlInput = document.getElementById('url');
  const url = urlInput.value.trim();
  if (!validarFormatoURL(url)) {
    mostrarError(urlInput, 'La URL de la página web personal no puede estar en blanco.');
  } else {
    console.log('URL de la página web personal válida.');
  }
}

function mostrarError(elemento, mensaje) {
  elemento.classList.add('input-error');
  const mensajeError = document.createElement('span');
  mensajeError.classList.add('error');
  mensajeError.innerText = mensaje;

  elemento.parentNode.appendChild(mensajeError);
}

function limpiarMensajeError() {
  const elementosError = document.querySelectorAll('.error');
  elementosError.forEach(function(elemento) {
    elemento.parentNode.removeChild(elemento);
  });

  const elementosConError = document.querySelectorAll('.input-error');
  elementosConError.forEach(function(elemento) {
    elemento.classList.remove('input-error');
  });
}

function validarFormatoURL(url) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const dominio = url.split('/')[2];
    if (dominio && dominio.trim() !== '') {
      return true;
    }
  }
  return false;
}
