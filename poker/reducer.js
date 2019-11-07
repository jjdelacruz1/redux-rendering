const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "RANDOMCARD1") {
        return [
            {
                value: randomValue(),
                suit: randomSuit()
            },
            state[1]
        ]
    } else if (type === "RANDOMCARD2") {
        return [
            state[0],
            {
                value: randomValue(),
                suit: randomSuit()
            }
        ]
    }
    
    return state;
}

function randomValue ( ) {
    const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    let randomValue = cardValue[Math.floor(Math.random()*cardValue.length)]
    return randomValue
}

function randomSuit ( ) {
    const cardSuit = ['C', 'D', 'H', 'S']
    let randomSuit = cardSuit[Math.floor(Math.random()*cardSuit.length)]
    return randomSuit
}
