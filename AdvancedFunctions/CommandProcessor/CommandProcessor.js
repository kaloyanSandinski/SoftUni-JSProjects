function solution() {
    let context = '';

    return {
        append: function(str) {
            context += str;
        },

        removeStart: function(n) {
            context = context.substring(n);
        },

        removeEnd: function(n) {
            context = context.substring(0, context.length - n)
        },

        print: function() {
            console.log(context);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();