function editElement(reference, match, replacer) {
    const output = reference.textContent.replace(new RegExp(match, 'g'), replacer);
    reference.textContent = output;
}