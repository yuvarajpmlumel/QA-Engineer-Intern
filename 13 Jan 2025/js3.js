function countLetterOccurrences(str) {
    const occurrences = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            char = char.toLowerCase();
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
    }
    return occurrences;
}

console.log(countLetterOccurrences("Hello World!"));
