"use strict";

let addressDb = []

let contact1 = new Address("Marvin", "Rausch", "Gaillardstrasse", "13187", "Berlin", "Deutschland", false);
let contact2 = new Address("Andreas", "Bonke", "Am Krusenick", "12555", "Berlin", "Deutschland", true);

/**
 * Default Contacts
 */
function addDefaultAddresses() {
    addAddress(contact1);
    addAddress(contact2);
}

/**
 * Constructor for creation of new address object
 * @param forename forename of new contact
 * @param name name of new contact
 * @param street street of new contact
 * @param postId postId of new contact
 * @param town town of new contact
 * @param country country of new contact
 * @param isPrivate true/false whether it is a private contact
 * @constructor
 */
function Address(forename, name, street, postId, town, country, isPrivate) {
    // ToDo check forename and name is unique
    this.forename = forename;
    this.name = name;
    this.street = street;
    this.postId = postId;
    this.town = town;
    this.country = country;
    this.isPrivate = isPrivate;
}

/**
 * method to add new address to DB
 * @param address address object
 */
function addAddress(address) {
    if (get_coordinates(address.street + " " + address.postId + " " + address.town).length == 0) {
        alert("Adresse existiert nicht!");
        return;
    }
    addressDb.push(address);

    createListElement(address);
    if (address.isPrivate && !loggedInAs.adminRights) {
        return;
    }
    addMarker(address);
}


/**
 * method to add a adress to adress list form
 * checks whether the address is private and user has necessary privileges
 * @param address adress object
 */
function createListElement(address) {
    // Kontakt Chips werden bei jedem login neu erstellt
    if (address.isPrivate && !loggedInAs.adminRights) {
        return;
    }
    let node = document.createElement("LI");
    node.setAttribute("id", "my_row");
    let chip = document.createElement("DIV");
    let mySpan = document.createElement("SPAN");
    let myImage = document.createElement("IMG");
    myImage.src = "img/img_avatar.jpg";
    myImage.setAttribute("id", "contactIcon");
    mySpan.setAttribute("id", "contactName");
    mySpan.textContent = address.forename + " " + address.name;
    chip.appendChild(mySpan);
    chip.appendChild(myImage);
    chip.className = "chip";
    node.appendChild(chip)
    document.querySelector("#contactListEntries").appendChild(node);
    chip.onclick = function (e) {
        showMarker(address);
        editAddress(address);
    };

}

/**
 * method to edit an address
 * sets input values to address properties and checks wheter user has rights to edit fields
 * @param address address object
 */
function editAddress(address) {
    button[3].hidden = true;
    modalAddress.hidden = false;
    let contactForm = document.querySelector('#AddressForm');
    contactForm.elements['forename'].value = address.forename;
    contactForm.elements['name'].value = address.name;
    contactForm.elements['street'].value = address.street;
    contactForm.elements['postId'].value = address.postId;
    contactForm.elements['town'].value = address.town;
    contactForm.elements['country'].value = address.country;
    button[1].hidden = false;
    button[2].hidden = false;

    let checkBox = document.querySelector('#updateAddressCheck');
    if (address.isPrivate) {
        checkBox.checked = true;
    } else {
        checkBox.checked = false;
    }
    if (!loggedInAs.adminRights) {
        contactForm.elements['forename'].readOnly = true;
        contactForm.elements['name'].readOnly = true;
        contactForm.elements['street'].readOnly = true;
        contactForm.elements['postId'].readOnly = true;
        contactForm.elements['town'].readOnly = true;
        contactForm.elements['country'].readOnly = true;
        checkBox.hidden = true;
        document.querySelector('#labelPrivateCheckBox').hidden = true;

        button[1].hidden = true;
        button[2].hidden = true;
    }
}
