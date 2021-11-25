const initialState = []
export const reducerBook = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_API_BOOK':
            return {
                ...state,
                state: action.payload
            }

        case 'ADD_BOOK':
            return {
                ...state,
                payload: {
                    title: action.payload.title,
                    author: action.payload.author,
                    isbn: action.payload.isbn,
                    publish: action.payload.publish,
                    numberOfPages: action.payload.numberOfPages,
                    country: action.payload.country
                }
            }
        default:
            return {
                ...state
            }
    }
}