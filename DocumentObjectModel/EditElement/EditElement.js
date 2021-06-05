function editElement(reference, match, replacer) {
    const output = reference.textContent.replace(new RegExp(match), replacer);
    reference.textContent = output;
}