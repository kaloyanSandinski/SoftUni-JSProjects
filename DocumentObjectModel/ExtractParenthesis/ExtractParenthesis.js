function extract(content) {
    let regexGroup = { word: 1 };
    let matchedWords = document.getElementById(content).textContent.matchAll(/\((?<word>.+?)\)/g);
    let output = '';
    for (const currWord of matchedWords) {
        output += currWord[regexGroup.word] + '; ';
    }
    return output;
}