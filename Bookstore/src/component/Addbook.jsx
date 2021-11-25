import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPICategory } from "../redux/action"

function Addbook(props) {
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
    const [uploaded, setUploaded] = useState("")
    const [validasiTitle, setValidasiTitle] = useState(true)
    const [validasiAuthor, setValidasiAuthor] = useState(true)
    const [validasiIsbn, setValidasiIsbn] = useState(true)

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

        if(!title) {
            setValidasiTitle(false)
            setValidasiTitles("require title")
        } else if(/[[\];%${}`^]/.test(title)){
            setValidasiTitle(false)
            setValidasiTitles("Please create title correctly")
        } else {
            setValidasiTitle(true)
            setValidasiTitles("")
        }
        
        if(!author) {
            setValidasiAuthor(false) 
            setValidasiAuthors("require author")
        } else if(/[[\];%${}`^]/.test(author)){
            setValidasiAuthor(false) 
            setValidasiAuthors("Please create author correctly")
        } else {
            setValidasiAuthor(true) 
            setValidasiAuthors("")
        }
        
        if(!isbn) {
            setValidasiIsbn(false) 
            setValidasiIsbns("require isbn")
        } else if(/[[\];%${}`^]/.test(isbn)){
            setValidasiIsbn(false) 
            setValidasiIsbns("Please create isbn correctly")
        } else {
            setValidasiIsbn(true) 
            setValidasiIsbns("")
        }
        
        if(validasiTitle == true  && validasiAuthor == true  && validasiIsbn == true ) {
            setUploaded("*uploaded clear the data first before filling in the data again")
            axios.post(
                "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books",
                { title, author, isbn, publish, numberOfPages, country }
            )
            .then(response => console.log(response))
        }

    }
    
    useEffect(() => {
        dispatch(fetchAPICategory())
    }, [])
    
    const category = state.categorys.state
    console.log(validasiTitles)
    console.log(validasiTitle)

    return (
        <div className="modal">
            <div className="form-addBook">
                <form onSubmit={addnewBook}>
                    <div className="form-center">
                        <div className="add-book">
                            <span>Add Book</span>
                            <a className="close-button" onClick={props.closeForm}>x</a>
                        </div>
                        <hr/>
                        <label>Title</label> 
                        <input type="text" placeholder="e.g Fleishman Is in Trouber: A Novel" style={!validasiTitle ? {outline: "#FFC0CB !important" } : {outline: "#ddd"}} onChange={e => setTitle(e.target.value)}/>
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
                        <br/>
                        <div className="error-submit">
                            <div>
                                {!validasiTitle ? ( <div>
                                        <span>error </span> 
                                        <span className="red">*{validasiTitles}</span>
                                    </div> )  : null
                                    }
                                {!validasiAuthor ? (
                                    <div>
                                        <span>error </span> 
                                        <span className="red">*{validasiAuthors}</span>
                                    </div>
                                ) : null}
                                {!validasiIsbn ? (
                                    <div>
                                        <span>error </span> 
                                        <span className="red">*{validasiIsbns}</span>
                                    </div>
                                ) : null}
                                {validasiTitle && validasiAuthor && validasiIsbn? <span className="red">{uploaded}</span> : ""}
                            </div>
                            <input type="submit" className="submit-button"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addbook

