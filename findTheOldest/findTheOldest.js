let findTheOldest = function(persons) {
    return persons.reduce((curentPerson, nextPerson) => {
        const date = new Date();
        const curentYear = date.getFullYear();

        if (!curentPerson.yearOfDeath) curentPerson.yearOfDeath = curentYear;
        if (!nextPerson.yearOfDeath) nextPerson.yearOfDeath = curentYear;

        return (curentPerson.yearOfDeath - curentPerson.yearOfBirth > nextPerson.yearOfDeath - nextPerson.yearOfBirth)
                ? curentPerson
                : nextPerson;
    }, [])
}

module.exports = findTheOldest
