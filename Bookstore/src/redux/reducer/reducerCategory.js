const initialState = {}
export const reducerCategory = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_API_CATEGORY':
            return {
                ...state,
                state: action.payload
            }
        default:
            return {
                ...state
            }
    }
}