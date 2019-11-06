const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if (type === "ADDNAME") {
        return [
            ...state,
            newName[0].value
        ]
    }

    return state;
}