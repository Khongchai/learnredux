//Reducers take in actions and do something to the state
const counterReducer = (state = 0, action) =>
{
    switch(action.type)
    {
        //when an action that has the type of "increment" or "decrement" is passed, these get activated.
        case 'INCREMENT':
            return state + action.payload
        case "DECREMENT":
            return state - 1
        default:
            return state
    };
};

export default counterReducer;