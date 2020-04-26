const caesar = function(string, shifts) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let caesarArray = [];
    // For shifts bigger then the alphabet length
    if (Math.abs(shifts) > alphabet.length) shifts %= alphabet.length;

    for(let i = 0; i < string.length; i++) {
        const char = string[i];
        let charIndex = alphabet.indexOf(char.toLowerCase());

        if (charIndex < 0) {
            caesarArray.push(char);
            continue;
        } else if (charIndex + shifts > alphabet.length - 1) {
            charIndex = charIndex - alphabet.length;
        } else if (shifts < 0) {
            if ((charIndex - Math.abs(shifts)) < 0) {
                charIndex = alphabet.length + charIndex;
            }
            let caesarChar = isUpperCase(char) ? alphabet[charIndex - Math.abs(shifts)].toUpperCase() : alphabet[charIndex - Math.abs(shifts)];
            caesarArray.push(caesarChar);
            continue;
        }

        let caesarChar = isUpperCase(char) ? alphabet[charIndex + shifts].toUpperCase() : alphabet[charIndex + shifts];
        caesarArray.push(caesarChar);
    }
    return caesarArray.join('');
}

const isUpperCase = function(char) {
    return (char.toUpperCase() === char) ? true : false;
}

module.exports = caesar
