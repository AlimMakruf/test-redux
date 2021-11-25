import axios from "axios"

const url_API = "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books"
const url_Category = "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries"

export const fetchAPIBook = () => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: "GET",
                url: url_API
            })

            return dispatch({
                type: "FETCH_API_BOOK",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchAPICategory = () => {
    return async (dispatch) => {
        try {
            const response =  await axios({
                method: "GET",
                url: url_Category
            })

            return dispatch({
                type: "FETCH_API_CATEGORY",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
