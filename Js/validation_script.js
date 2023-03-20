function checkPayment(event) {
  if (!(checkName() && checkCardData('card-number') && checkCardData('cvc') && checkExpDate())) {
    event.preventDefault();
  }
}

function checkReservation(event) {

  if (!checkReservationDates()) {
    event.preventDefault();
  }
}

function checkName() {
  var holderName = document.getElementById("card-holder");
  var holderError = document.querySelector("#card-holder + .error-message");

  if (holderName.value === '') {
    holderError.textContent = "Por favor, ingrese su nombre";
    holderError.style.color = "red";
    return false;
  } else {
    holderError.textContent = "";
    return true;
  }
}

function checkCardData(text) {

  var cardInput = document.getElementById(text);
  var cardError = document.querySelector("#" + text + " + .error-message");

  const cardRegex = /[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})|[0-9]{3}/;
  if (!cardRegex.test(cardInput.value) || cardInput.value === '') {
    cardError.textContent = "Por favor, ingrese el dato indicado";
    cardError.style.color = "red";
    return false;
  } else {
    cardError.textContent = "";
    return true;
  }

}

function checkExpDate() {
  var expInput = document.getElementById("expiration-date");
  var expError = document.querySelector("#expiration-date + .error-message");

  const expRegex = /[0-1][0-9]\/[0-9]{2}/;
  if (!expRegex.test(expInput.value) || expInput.value === '') {
    expError.textContent = "Por favor, ingrese una fecha correcta";
    expError.style.color = "red";
    return false;
  } else {
    expError.textContent = "";
    return true;
  }
}

function checkReservationDates() {
  var dateFrom = document.getElementById("dateFrom");
  var dateFromError = document.querySelector("#dateFrom + .error-message");

  var dateTo = document.getElementById("dateTo");
  var dateToError = document.querySelector("#dateTo + .error-message");

  if (dateFrom.value === '') {
    dateFromError.textContent = "Por favor,escriba una fecha";
    dateFromError.style.color = "red";
    return false;
  } else if (dateTo.value === '') {
    dateToError.textContent = "Por favor,escriba una fecha";
    dateToError.style.color = "red";
    return false;
  } else {
    dateFromError.textContent = "";
    dateToError.textContent = "";

    const today = new Date().toLocaleDateString();

    if (new Date(dateFrom.value) < new Date(today) | new Date(dateFrom.value) > new Date(dateTo.value) ) {
      dateFromError.textContent = "Esta fecha no es valida";
      dateFromError.style.color = "red";
      return false;
    } else if (new Date(dateTo.value) < new Date(today) | new Date(dateTo.value) < new Date(dateFrom.value)) {
      dateToError.textContent = "Esta fecha no es valida";
      dateToError.style.color = "red";
      return false;
    } else {
      dateFromError.textContent = "";
      dateToError.textContent = "";
      return true;
    }
  }
}
