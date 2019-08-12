import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dumbObject : {
        d : 1,
        u : 2,
        m : 3,
        b : 4
    }
};

export default function counter(state = initialState, action){
    
    switch(action.type){
        case types.INCREMENT:
            return { 
                ...state,
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, u:0 }
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default :
            return state;
    }

    return state;
}