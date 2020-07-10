const Pool = require('pg').Pool

/**
 * IMPORTANT
 * add your correct login data to this file for database authorization
 */
const sourceFile = require('/Users/bullet/LocalProjects/GitHub/login_variables');

let pool = new Pool({
    user: sourceFile.user,
    host: 'db.f4.htw-berlin.de',
    database: '_s0566563__webdev',
    password: sourceFile.password,
    port: 5432,
});


/**
 * method to get all contacts in database
 * @returns JSON of all contacts stored in database
 */
const getContacts = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM contacts order by id asc', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

/**
 * method to get specific contact from database
 * @returns JSON of specific contact
 */
const getContact = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM contacts WHERE id=$1',[id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


/**
 * method to add a new contact to the database
 * @param body JSON with necessary information
 * example for correct JSON: {'forename': 'Marvin', 'name': 'Rausch', 'street': 'Gaillardstraße', 'postId': 13187,
               "latitude": 52.45, 'longitude': 13.42, 'isPrivate': 'true', 'town': 'berlin', 'country': 'Deutschland'}
 * @returns if contact was successfully added to database: JSON of new contact; else response text of database
 */
const createContact = (body) => {
    return new Promise(function (resolve, reject) {

    // firstly get all contacts to determine a correct id for the new contact
    getContacts().then(response => {
        let new_id = response.length + 1;

            const {forename, name, street, postId, town, country, isPrivate, longitude, latitude} = body
            pool.query('INSERT INTO contacts (forename, name, street, postId, town, country, id, isPrivate,' +
                ' latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [forename, name, street, postId, town, country, new_id, isPrivate, latitude, longitude], (error, results) => {
                if (error) {
                    reject(error)
                }
                if (results !== undefined) {
                    resolve({'id': new_id})
                }
            })
        })
    })
}

/***
 * method to check username and password
 * @param body JSON with login data
 * example for correct format: {'username': 'admin', 'password': 'admin'}
 * @returns a Promise object which contains the login data when they were correct;
 * else Promise object with error message
 */
const checkCredentials = (body) => {
    console.log(pool)
    return new Promise(function (resolve, reject) {

        const {username, password} = body
        pool.query('SELECT * from users where username=$1 and password=$2', [username, password], (error, results) => {
            if (error) {
                reject(error)
            }
            if (results.rowCount === 0) {
                reject("error: login data were not correct")
            } else {
                resolve(body)
            }
        })
    })
}

/**
 * method to update an existing contact in the database
 * @param id id of contact you want to edit
 * @param body JSON with contact data
 * example for correct JSON: {'forename': 'Marvin', 'name': 'Rausch', 'street': 'Gaillardstraße', 'postId': 13187,
               "latitude": 52.45, 'longitude': 13.42, 'isPrivate': 'true', 'town': 'berlin', 'country': 'Deutschland'}
 * @returns a Promise object which contains a return message
 */
const updateContact = (id, body) => {
    return new Promise(function (resolve, reject) {
        const {forename, name, street, postId, town, country, isPrivate, longitude, latitude} = body
        pool.query('UPDATE contacts set forename=$1, name=$2, street=$3, postId=$4, town=$5, country=$6, ' +
            'isPrivate=$7, latitude=$8, longitude=$9 where id=$10', [forename, name, street, postId, town, country, isPrivate, latitude, longitude, id], (error, results) => {
            if (error) {
                console.log(error)
                reject(error)
            }
            if(results.rowCount === 0){
                reject("contact to update was not found in database")
            }else{
                resolve(`contact has been updated`)
            }
        })
    })
}

/**
 * method to delete a contact in database
 * @param id id of contact you want to delete
 * @returns {Promise<unknown>}
 */
const deleteContact = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM contacts WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
                reject(error)
            }
            if(results.rowCount === 0){
                reject("contact to delete was not found in database")
            }else{
                resolve(`contact deleted with ID: ${id}`)
            }
        })
    })
}

module.exports = {
    getContacts: getContacts,
    createContact: createContact,
    deleteContact: deleteContact,
    updateContact: updateContact,
    checkCredentials: checkCredentials,
    getContact: getContact
}