"use strict";

let addressDb = []


/**
 * Default Contacts
 */
function addDefaultAddresses() {
    let contact1 = new Address("Marvin", "Rausch", "Gaillardstrasse", "13187", "Berlin", "Deutschland", false);
    let contact2 = new Address("Andreas", "Bonke", "Am Krusenick", "12555", "Berlin", "Deutschland", true);

    saveAddressInLocalStorage(contact1);
    saveAddressInLocalStorage(contact2);

    getAddressFromLocalStorage();
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
    this.forename = forename;
    this.name = name;
    this.street = street;
    this.postId = postId;
    this.town = town;
    this.country = country;
    this.isPrivate = isPrivate;
}

/**
 * checks whether an address is already existing
 * @param forename forename of contact
 * @param name name of contact
 * @returns {boolean} true if there is already a contact in DB with these parameters; else false
 */
function contactAlreadyExisting(forename, name) {
    for (let i = 0; i < addressDb.length; i++) {
        if (addressDb[i].forename === forename && addressDb[i].name === name) {
            return true;
        }
    }
    return false;
}

/**
 * method to initiate the process of getting coordinates of an address and adding the address to Map and DB
 * @param address address object
 */
function addAddressToMap(address) {
    get_coordinates(address);
}

/**
 * this method is called by the get_coordinates function to add the address to DB and Map after the coordinates
 * attributes were added to the address object
 * @param address
 */
function addAddressToDB(address) {
    if (contactAlreadyExisting(address.forename, address.name)) {
        alert("Kontakt existiert bereits!")
        return;
    }
    addressDb.push(address);

    createListElement(address);
    if (address.isPrivate && !loggedInAs.adminRights) {
        return;
    }
    saveAddressInLocalStorage(address);
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
        contactForm.elements['forename'].disabled = true;
        contactForm.elements['name'].disabled = true;
        contactForm.elements['street'].disabled = true;
        contactForm.elements['postId'].disabled = true;
        contactForm.elements['town'].disabled = true;
        contactForm.elements['country'].disabled = true;

        checkBox.hidden = true;
        document.querySelector('#labelPrivateCheckBox').hidden = true;

        button[1].hidden = true;
        button[2].hidden = true;
    }
}

/**
 * method to save an address into LocalStorage
 * @param address address 
 */
function saveAddressInLocalStorage(address) {

    localStorage.setItem(address.forename + address.name, JSON.stringify(address));
}

/**
 * method that gets all addresses from the local storage and then writes them to the addressDB and Map 
 */
function getAddressFromLocalStorage() {

    for (let index = 0; index < localStorage.length; index++) {
        let tempKey = localStorage.key(index);
        let addressRaw = localStorage.getItem(tempKey)
        let address = JSON.parse(addressRaw);

        if (!contactAlreadyExisting(address.forename, address.name)) {
            addAddressToMap(address);
        } else {
            console.log("Addresse sind schon vorhanden");  // Debug warning entry
        }

    }
}
