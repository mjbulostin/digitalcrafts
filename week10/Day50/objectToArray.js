const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
}

const objKeys = Object.keys(obj);
console.log(objKeys);

const objValues = Object.values(obj);
console.log(objValues);

const objEntries = Object.entries(obj);
console.log(objEntries);