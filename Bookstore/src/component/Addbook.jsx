import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPICategory } from "../redux/action"

function Addbook() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")
    const [publish, setPublish] = useState("")
    const [numberOfPages, setNumberOfPages] = useState("")
    const [country, setCountry] = useState()
    const state = useSelector(state => state)
    const [validasiTitles, setValidasiTitles] = useState("")
    const [validasiAuthors, setValidasiAuthors] = useState("")
    const [validasiIsbns, setValidasiIsbns] = useState("")



    const addnewBook = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_BOOK",
            payload: {
                title, 
                author, 
                isbn, 
                publish, 
                numberOfPages, 
                country
            }
        })
        let validasiTitle = false
        let validasiAuthor = false
        let validasiIsbn = false

        if(!title) {
            setValidasiTitles("require title")
        } else if(/[[\];%${}`^]/.test(title)){
            setValidasiTitles("Please create title correctly")
        } else validasiTitle = true
        
        if(!author) {
            setValidasiAuthors("require author")
        } else if(/[[\];%${}`^]/.test(author)){
            setValidasiAuthors("Please create author correctly")
        } else validasiAuthor = true
        
        if(!isbn) {
            setValidasiIsbns("require isbn")
        } else if(/[[\];%${}`^]/.test(isbn)){
            setValidasiIsbns("Please create isbn correctly")
        } else validasiIsbn = true
        
        if(validasiTitle == true  && validasiAuthor == true  && validasiIsbn == true ) {
            console.log({ title, author, isbn, publish, numberOfPages, country })
        }

        // axios.post(
        //     "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books",
        //     { title, author, isbn, publish, numberOfPages, country }
        // )
        // .then(response => console.log(response))
    }
    
    useEffect(() => {
        dispatch(fetchAPICategory())
    }, [])
    
    const category = state.categorys.state

    return (
        <div className="form-addBook">
            <form onSubmit={addnewBook}>
                <div className="form-center">
                    <div className="add-book">
                        <span>Add Book</span>
                        <a className="close-button">x</a>
                    </div>
                    <hr/>
                    <label>Title</label> 
                    <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" onChange={e => setTitle(e.target.value)}/>
                    <label>Author</label> 
                    <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" onChange={e => setAuthor(e.target.value)}/>
                    <label>ISBN</label> 
                    <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" onChange={e => setIsbn(e.target.value)}/>
                    <label>Published on</label> 
                    <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" onChange={e => setPublish(e.target.value)}/>
                    <label>Number of Page</label> 
                    <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" onChange={e => setNumberOfPages(e.target.value)}/>
                    <label>Country Publisher</label>
                    <select onChange={e => setCountry(console.log(e.target.value))}>
                        <option>Country Publisher</option>
                        {category && category.map(res => <option value={res.name}>{res.name}</option> )}
                    </select>
                    {validasiAuthors && <p>{validasiAuthors}</p>}
                    {validasiIsbns && <p>{validasiIsbns}</p>}
                    <br/>
                    <input type="submit" className="submit-button"/> 
                </div>
            </form>
        </div>
    )
}

export default Addbook


// if(!title){
//     console.log("require title")
// } else if(/[[\];%${}`^]/.test(title)) {
//     console.log("Please fill title correctly")
// } else { 
//     return true
// }

// if(!author){
//     console.log("require author")
// } else if(/[[\];%${}`^]/.test(author)) {
//     console.log("Please fill author correctly")
// } else {
//     return true
// }

// if(!isbn){
//     console.log("require isbn")
// } else if(/[[\];%${}`^]/.test(isbn)) {
//     console.log("Please fill isbn correctly")
// } else {
//     return true
// }