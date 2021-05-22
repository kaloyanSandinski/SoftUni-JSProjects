function sorter(inputArr) {
    inputArr.sort((current, next) => {
        if (current.length > next.length) {
            return 1;
        } else if (current.length < next.length) {
            return -1
        } else {
            return current.localeCompare(next);
        }
    }).forEach(element => { console.log(element) });

}

sorter(['test',
    'Deny',
    'omen',
    'Default'
]);