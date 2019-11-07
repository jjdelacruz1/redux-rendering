const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10

    if (type === "ADDHEIGHT") {
        return {
            ...state,
            height: state.height + 10
        }
    }

    // ACTION 2 - Increment width by 10

    if (type === "ADDWIDTH") {
        return {
            ...state,
            width: state.width + 10
        }
    }

    // ACTION 3 - Change the color

    if (type === "RED") {
        return {
            ...state,
            color: state.color = '#ff0000'
        }
    }

    if (type === "BLUE") {
        return {
            ...state,
            color: state.color = '#0000ff'
        }
    }

    return state;
}