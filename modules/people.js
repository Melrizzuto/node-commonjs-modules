const createName = require('./names'); // Importo names.js
const createHobbies = require('./hobbies'); // Importo hobbies.js

function myPerson() {
    // Uso la funzione createName per generare un oggetto fullName
    const fullName = createName("Mel", "Rizzuto");

    // Uso la funzione createHobbies per generare un oggetto con hobbies
    const hobbies = createHobbies("reading", "drawing", "coding");

    // Combino fullName e hobbies in un unico oggetto
    return { fullName, hobbies };
}

module.exports = myPerson;