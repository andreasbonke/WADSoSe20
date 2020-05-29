"use strict";

let logInModal = document.getElementById('modalLogIn');
let loginForm = document.getElementById('loginForm');
let mainWindow = document.getElementById('main');
let contactList = document.getElementById('contactList');
let modalNewAddress = document.getElementById('modalNewAddress');
let modalUpdateAddress = document.getElementById('modalUpdateAddress');

contactList.hidden = true;
modalNewAddress.hidden = true;
modalUpdateAddress.hidden = true;



function showContactsModal() {

    contactList.hidden = false;

}

function showNewAddressModal() {

    modalNewAddress.hidden = false;

}

function showLoginModal() {

    logInModal.hidden = false;

}

function showUpdateModal() {

    modalUpdateAddress.hidden = false;

}

event.preventDefault();