const createName = require('./names'); // Importo names.js
const createHobbies = require('./hobbies'); // Importo hobbies.js

function myPerson() {
    // Uso la funzione createName per generare un oggetto fullName
    const fullName = createName(firstName, lastName);

    // Uso la funzione createHobbies per generare un oggetto con hobbies
    const hobbies = createHobbies(hobbyOne, hobbyTwo, hobbyThree);

    // Combino fullName e hobbies in un unico oggetto
    return { fullName, hobbies };
}

module.exports = myPerson;