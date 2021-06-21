function solve(face, suit) {
    let newCard;
    class card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        toString() {
            let result = this.face;
            if (this.suit == 'S') {
                result += '\u2660';
            } else if (this.suit == 'H') {
                result += '\u2665';
            } else if (this.suit == 'D') {
                result += '\u2666';
            } else {
                result += '\u2663';
            }
            return result;
        }
    }

    if (face != 2 && face != 3 && face != 4 && face != 5 && face != 6 && face != 7 && face != 8 && face != 9 && face != 10 && face != 'J' && face != 'Q' && face != 'K' && face != 'A') {
        throw new Error('Invalid face!');
    } else if (suit != 'S' && suit != 'H' && suit != 'D' && suit != 'C') {
        throw new Error('Invalid suit!');
    } else {
        newCard = new card(face, suit);
        return newCard.toString();
    }
}

console.log(solve('A', 'S'));