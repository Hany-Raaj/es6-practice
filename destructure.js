const person = {
    name: 'Sakib',
    age: 23,
    gfName: 'Mallika',
    address: 'Kochukhet'
}

const age = person.name;
console.log(age);

// Destructure
const {gfName} = person;
console.log(gfName);

const frineds = ['salman khan', 'shahrukh khan', 'amir khan', 'tuha khan', 'solim uddin khan'];
const [chuto, boro] = frineds;
console.log(chuto, boro);

const [close, normal, ...restFriends] = frineds;
console.log(restFriends);