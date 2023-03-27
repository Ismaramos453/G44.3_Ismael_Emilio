function checkLogin(event){
    if(!(checkMail()&&checkPassword())){
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
    var pass = document.getElementById("loginpass");
    var passError = document.querySelector("#loginpass + .error-message");

    if (pass.value === '') {
        passError.textContent = "Por favor, ingresa una contraseña";
        passError.style.color = "red";
        return false;
    } else {
        passError.textContent = "";
        return true;
    }

}