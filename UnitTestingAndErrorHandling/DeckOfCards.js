function printDeckOfCards(cards) {
    function createCard(face, suit) {
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
            throw new Error(`Invalid card: ${face}${suit}`);
        } else if (suit != 'S' && suit != 'H' && suit != 'D' && suit != 'C') {
            throw new Error(`Invalid card: ${face}${suit}`);
        } else {
            newCard = new card(face, suit);
            return newCard.toString();
        }
    }
    try {
        let result = [];
        cards.forEach(element => {
            result.push(createCard(element.substring(0, element.length - 1), element.substring(element.length - 1)));
        });
        console.log(result.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);