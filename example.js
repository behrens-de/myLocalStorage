const storage = new MyLocalStorage;

storage.clear();
// Primitives
storage.set('demo', 123); // Primitiverdatentyp wird gesetzt wenn noch nicht vorhanden
storage.update('demo', 222); // Aktuallisiert einen primitiven Datentyp

console.log(storage.has('demo'));
console.log(storage.get('demo'));

setTimeout(() => {
    storage.remove('demo'); // Entfernt einen Key inklusiv seines Values
}, 2000);


// ARRAY
const array = [1, 2, 3];
const array2 = [1, 2, 3, 44];
storage.setArray('array', array)
storage.setArray('array2', array2)

console.log(storage.getArray('array2'));

storage.addToArray('array2', 99);
storage.addToArray('array2', 77);
console.log(storage.getArray('array2'));

storage.removeFromArray('array2', 99);
console.log(storage.getArray('array2'));

let isIntoArray = storage.isIntoArray('array2', 88)
console.log(isIntoArray);
storage.updateArray('array2', 77, 88);
console.log(storage.getArray('array2'));

isIntoArray = storage.isIntoArray('array2', 88)
console.log(isIntoArray);


// Objects
const exArr = [1, 2, 3];

const examplObj = {
    firstname: 'max',
    lastname: 'muster',
    age: 33
}

const examplObj2 = {
    firstname: 'john',
    lastname: 'doe',
    age: 44
}
console.log('######################');
console.log('Objects');
console.log('######################');

console.log(typeof examplObj);
console.log(typeof exArr);


storage.setObject('examplObj', exArr);
storage.setObject('examplObj', examplObj2);
storage.addObject('examplObj', examplObj);
storage.addObject('examplObj', examplObj2);

const ob = storage.updateObject('examplObj', 'firstname', 'Mon');
const ob2 = storage.updateObject('examplObj', 'firstname', 'Mon', 'age', 99);
const ob3 = storage.updateObject('examplObj', 'age', 999);


function setObject(){
    storage.setObject('examplObj', examplObj2);
    }
// updateObject(key, target, targetvalue, selected, selectedvalue)
function removeOnject(){
storage.removeObject('examplObj', 'lastname', 'muster');
}