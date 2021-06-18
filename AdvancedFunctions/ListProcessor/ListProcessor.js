function solution(inputArr) {
    let collection = [];
    let functions = {
        add: (input) => collection.push(input),
        remove: (input) => { collection = collection.filter(x => x != input) },
        print: () => { console.log(collection.join(',')) },
    }

    inputArr.forEach(currComand => {
        let commands = currComand.split(' ');
        if (commands[0] == 'add') {
            functions.add(commands[1]);
        } else if (commands[0] == 'remove') {
            functions.remove(commands[1]);
        } else if (commands[0] == 'print') {
            functions.print();
        }
    });
}

solution(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);