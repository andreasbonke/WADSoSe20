"use strict";
let logInModal = document.querySelector('#modalLogIn');
let loginForm = document.querySelector('#loginForm');
let contactList = document.querySelector('#contactList');
let modalAddress = document.querySelector('#modalAddress');
let button = document.querySelectorAll('.form-button');
let textInputs = document.querySelectorAll('input[type="text"]');
let showOnly = false;


/* Default Behaviour */
logInModal.hidden = false;
contactList.hidden = true;
modalAddress.hidden = true;


/* schließt LogIn Formular, wenn Benutzerdaten korrekt sind */
loginForm.onsubmit = function (event) {
    event.preventDefault();
    let usernameInput = textInputs[0];
    let passwordInput = document.querySelectorAll('input[type="password"]')[0];
    let user = usernameInput.value;
    let password = passwordInput.value;
    if (login(user, password)) {
        if (hasAdminRights(user)) {
            document.querySelector('#addNewContactFormBtn').hidden = false;
        } else {
            document.querySelector('#addNewContactFormBtn').hidden = true;
        }
        logInModal.hidden = true;
        document.querySelector('#my_header').innerText = loggedInAs.username + "@AdViz";
        addDefaultAddresses();

    } else {
        alert('Benutzer existiert nicht')
    }
    usernameInput.value = '';
    passwordInput.value = '';

}

/* Fügt einen neuen Kontakt hinzu, nachdem das Formular korrekt ausgefüllt wurde */
modalAddress.onsubmit = function (event) {
    event.preventDefault();
    modalAddress.hidden = true;
    if (!showOnly) {

        let forename = document.querySelector('#forename').value;
        let name = document.querySelector('#name').value;
        let street = document.querySelector('#street').value;
        let postId = document.querySelector('#postId').value;
        let town = document.querySelector('#town').value;
        let country = document.querySelector('#country').value;
        let address = new Address(forename, name, street, postId, town, country, document.querySelector('#updateAddressCheck').checked);
        addAddressToMap(address);
        clearAllFields();
    }
    showOnly = true;

}

/* setzt alle Input Fields im Kontakt Formular zurück */
function clearAllFields() {
    document.querySelector('#forename').value = "";
    document.querySelector('#name').value = "";
    document.querySelector('#street').value = "";
    document.querySelector('#postId').value = "";
    document.querySelector('#town').value = "";
    document.querySelector('#country').value = "";
    document.querySelector('#updateAddressCheck').checked = false;
}


/* Bei klicken des LogOut Buttons, öffnet sich das "Login" Modal */
let logOut = document.querySelector('#logOutBtn');
logOut.addEventListener("click", function () {
    window.location.reload(true);
});


/* Bei klicken des Show Buttons ('Kontakt Liste'), öffnet sich die Kontakt Liste */
let show = document.querySelector('#showContactListBtn');
show.addEventListener("click", function () {
    contactList.hidden = false;
    map.setView({ lon: lon, lat: lat }, 11);
    showOnly = true;
})

/* Bei klicken des Add Buttons ('neuer Kontakt'), öffnet sich das "Addressen Hinzufügen" Formular */
let add = document.querySelector('#addNewContactFormBtn');
add.addEventListener("click", function () {
    clearAllFields();
    showOnly = false;
    modalAddress.hidden = false;
    modalAddress.querySelector('h2').textContent = "Addresse hinzufügen"
    button[1].hidden = true;
    button[2].hidden = true;
    button[3].hidden = false;
});


/* Bei klicken des Close Buttons, schließt die Kontakt Liste */
let closeBtnList = document.querySelector('#closeContactList');
closeBtnList.addEventListener("click", function () {
    contactList.hidden = true;
    clearAllFields();
});

/* Bei klicken des Close Buttons, schließt die Kontakt Formular */
let closeBtnForm = document.querySelector('#closeContactForm');
closeBtnForm.addEventListener("click", function () {
    modalAddress.hidden = true;
    clearAllFields();
    showOnly = true;
});
