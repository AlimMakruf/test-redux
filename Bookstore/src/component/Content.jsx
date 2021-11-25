import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPIBook, fetchAPICategory } from '../redux/action'
import Addbook from './Addbook'

function Content() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [form, setForm] = useState(false)

    useEffect(() => {
        dispatch(fetchAPIBook())
    }, [])
    
    const openForm = () => {
        setForm(true)
    }

    const closeForm = () => {
        setForm(false)
    }

    // console.log(state.books.state)
    
    return (
        <main>
            <div className="header">
                <span>Books</span>
                <div className="button" onClick={openForm}>Add +</div>
            </div>
            
            {form && <Addbook closeForm={closeForm}/>}

            <ul>
                {state.books.state && state.books.state.map((res, index) => 
                    <li className="card" key={index}>
                        <aside>
                            <div className="title">
                                <h1>{res.title}</h1>
                                <h4>Book by {res.author}</h4>
                            </div>
                            <div className="detail">
                                <div className="detail-ISBN">
                                    <div>
                                        <h4>ISBN</h4>
                                        <span>{res.isbn}</span>
                                    </div>
                                    <div>
                                        <h4>Published on</h4>
                                        <span>{res.publishedOn}.</span>
                                    </div>
                                </div>
                                <div className="detail-NumberPage">
                                    <div>
                                        <h4>Number of Page</h4>
                                        <span>{res.numberOfPages} pages</span>
                                    </div>
                                    <div>
                                        <h4>Country Publisher</h4>
                                        <span>{res.country}</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="image">
                            <img src={res.imageUrl}/>
                        </div>
                    </li>
                    )}
            </ul>
        </main>
    )
}

export default Content

