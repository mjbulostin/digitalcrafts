const initialState = {
    counter: 0,
    userName: "mike",
    address: {},
    dog: "🐕"
    name: "",
};


function rootReducer(state = initialState, action) {
    switch(action.type){
        case "ADD": 
            return { ...state, counter: state.counter + 1}
        
        case "SUBTRACT":
            return { ...state, counter: state.counter - 1}

        case "CHANGE_DOG_TO_DUCK":
            return { ...state, dog: "🦆" };

        case "CHANGE_DUCK_TO_DOG":
            return { ...state, dog: "🐕"};
        
        // case "DISPLAY_NAME":
        //     return { ...state, name.value}

        default:
            return state;
    }
}

export default rootReducer;