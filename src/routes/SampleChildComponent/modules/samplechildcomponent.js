//actions
const SAMPLE_ACTION = 'SAMPLE_ACTION';

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
const initialState = {}
//reducer
export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}