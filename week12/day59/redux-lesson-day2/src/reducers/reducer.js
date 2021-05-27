import { INSERT_OBJECT } from "../action-types/action-types"

const initialState = {
    fakeData: [{ userName: "Michelle", height: "5.1"}],

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_OBJECT":
            return { fakeData: [{ userName: "Mike", height: "7.1" }] };
        default:
            return state;
    }
};