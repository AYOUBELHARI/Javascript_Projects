function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function(people) {
    return people.reduce((old, person) => {
        let oldAge = getAge(old.yearOfBirth, old.yearOfDeath) ;
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath) ;
        return personAge > oldAge ? person : old ;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
