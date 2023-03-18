
function checkRegister(event) {
    if (!(checkMail()&&checkPassword()&&checkUserName()&&checkFirstName()&&checkLastName()&&checkAddress()&&checkPhone()&&checkBirthDate())){
      event.preventDefault();
    }
  }
  
  function checkMail(){
    var emailInput = document.getElementById("email");
    var emailError = document.querySelector("#email + .error-message");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value) || emailInput.value === '') {
      emailError.textContent = "Por favor, ingresa una dirección de correo electrónico válida.";
      emailError.style.color = "red";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }
  
  function checkPassword(){
  
    var pass1 = document.getElementById("password1");
    var pass2 = document.getElementById("password2");
    var passwordError1 = document.querySelector("#password1 + .error-message");
    var passwordError2 = document.querySelector("#password2 + .error-message");
    var ok = false;
  
    if (pass1.value === '') {
      passwordError1.textContent = "Por favor, ingresa una contraseña";
      passwordError1.style.color = "red";
    } else {
      if (pass1.value.length < 8) {
        passwordError1.textContent = "La contraseña debe tener al menos 8 caracteres";
        passwordError1.style.color = "red";
      } else if (pass2.value === '') {
        passwordError2.textContent = "Debe introducir la contraseña dos veces"
        passwordError2.style.color = "red";
      } else if (pass1.value != pass2.value) {
        passwordError2.textContent = "Las contraseñas no coinciden";
        passwordError2.style.color = "red";
      } else {
        passwordError1.textContent = "";
        passwordError2.textContent = "";
        ok = true;
      }
    }
    return ok;
  }
  
  function checkUserName(){
    var userName = document.getElementById("username");
    var userError = document.querySelector("#username + .error-message");
    var ok = false;
  
    if (userName.value === ''){
      userError.textContent = "Por favor, ingresa un nombre de usuario";
      userError.style.color = "red";
    } else if (userName.value.length < 8) {
      userError.textContent = "El nombre de usuario debe tener al menos 8 caracteres";
      userError.style.color = "red";
    } else {
      userError.textContent = "";
      ok = true;
    }
    return ok;
  }
  
  function checkFirstName(){
    var firstName = document.getElementById("first-name");
    var nameError = document.querySelector("#first-name + .error-message");
  
    if (firstName.value === ''){
      nameError.textContent = "Por favor, ingrese su nombre";
      nameError.style.color = "red";
      return false;
    } else {
      nameError.textContent = "";
      return true;
    }
  }
  
  function checkLastName(){
    
    var lastName = document.getElementById("last-name");
    var surnameError = document.querySelector("#last-name + .error-message");
  
    if (lastName.value === ''){
      surnameError.textContent = "Por favor, ingrese su(s) apellido(s)";
      surnameError.style.color = "red";
      return false;
    } else {
      surnameError.textContent = "";
      return true;
    }
  }
  
  function checkPhone(){
    var phoneInput = document.getElementById("phone");
    var phoneError = document.querySelector("#phone + .error-message");
  
    const telephoneRegex = /[0-9]{9}/;
    if (!telephoneRegex.test(phoneInput.value) || phoneInput.value === '') {
      phoneError.textContent = "Por favor, ingresa un número de teléfono válido.";
      phoneError.style.color = "red";
      return false;
    } else {
      phoneError.textContent = "";
      return true;
    }
  }
  
  function checkAddress() {
    var addrInput = document.getElementById("address");
    var addrError = document.querySelector("#address + .error-message");
  
    if(addrInput.value === ''){
      addrError.textContent = "Por favor, incluye una dirección";
      addrError.style.color = "red";
      return false;
    } else {
      addrError.textContent = "";
      return true;
    }
  }
  
  function checkBirthDate () {
    var dateInput = document.getElementById("birthdate");
    var dateError = document.querySelector("#birthdate + .error-message");
  
    if(dateInput.value === ''){
      dateError.textContent = "Por favor,escriba una fecha";
      dateError.style.color = "red";
      return false;
    } else {
      edadMS = Date.parse(Date()) - Date.parse(dateInput.value);
      edads = new Date();
      edads.setTime(edadMS);
      resultado = edads.getFullYear() - 1970;
      res = (resultado <= 0) ? 0 : resultado; 
  
      if (res < 18){
        dateError.textContent = "Debe ser mayor de edad para registrarse";
        dateError.style.color = "red";
        return false;
      } else {
        dateError.textContent = "";
        return true;
      }
    }
  }