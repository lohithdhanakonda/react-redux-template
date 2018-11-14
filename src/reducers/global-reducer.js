//actions
const SAMPLE_ACTION = 'SAMPLE_ACTION';
const LOGIN = 'LOGIN';

//action creators
export function sampleAction() {
    return (dispatch) => {
        dispatch({
            type: SAMPLE_ACTION,
            payload: {}
        })
    }
}

//action handlers
const ACTION_HANDLERS = {
    [SAMPLE_ACTION]: (state, action) => {
        return Object.assign({}, state)
    }
}
//default state
const initialState = { isAuthenticated: false }
//reducer
export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}