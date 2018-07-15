// Reducers have two arguments: state and action
// It gets called when there is an action
// State argument is not application state,
// only the state this reducer is being responsible for

// state default value is null
// redux doesn's allow reducer returns undefined
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state; // no action yet. first initiate
}