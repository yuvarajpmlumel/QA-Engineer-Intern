function generateCombinations(str) {
    let result = [];

    function combine(prefix, remaining) {
        for (let i = 0; i < remaining.length; i++) {
            let newCombination = prefix + remaining[i];
            result.push(newCombination);
            combine(newCombination, remaining.slice(i + 1));
        }
    }

    combine("", str);
    return result;
}

console.log(generateCombinations("abc"));
