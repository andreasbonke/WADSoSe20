"use strict";

let admin = { username: 'admin', password: 'admin', adminRights: true }
let normalo = { username: 'normalo', password: 'normalo', adminRights: false }
let userDB = [admin, normalo]
let loggedInAs = null;

/**
 * method to check whether login data valid
 * @param user  username
 * @param password  password
 * @returns {boolean} true if login data correct; else false
 */
function login(user, password) {
    let i;
    for (i = 0; i < userDB.length; i++) {
        let tmpUser = userDB[i]
        if (tmpUser.username === user && tmpUser.password === password) {
            loggedInAs = tmpUser;
            return true;
        }
    }
    return false;
}

/**
 * checks whether an user has admin rights
 * @param username username of user you want to check
 * @returns {boolean} true if user has admin rights; else false
 */
function hasAdminRights(username) {
    let i;
    for (i = 0; i < userDB.length; i++) {
        let tmpUser = userDB[i]
        if (tmpUser.username === username && tmpUser.adminRights) {
            return true;
        }
    }
    return false;
}