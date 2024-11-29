const createName = require('./names'); // Importo names.js
const createHobbies = require('./hobbies'); // Importo hobbies.js

function myPerson() {
    //variabili per inserire gli args da console
    const firstName = process.argv[2] ?? "firstname";
    const lastName = process.argv[3] ?? "lastname";
    const hobbyOne = process.argv[4] ?? "hobby 1";
    const hobbyTwo = process.argv[5] ?? "hobby 2";
    const hobbyThree = process.argv[6] ?? "hobby 3";
    // Uso la funzione createName per generare un oggetto fullName
    const fullName = createName(firstName, lastName)

    // Uso la funzione createHobbies per generare un oggetto con hobbies
    const hobbies = createHobbies(hobbyOne, hobbyTwo, hobbyThree);

    // Combino fullName e hobbies in un unico oggetto
    return { fullName, hobbies };
}

module.exports = myPerson;