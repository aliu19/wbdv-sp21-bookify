import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import bookService from '../../services/book-service'

const Details = () => {

  const {bookId} = useParams()
  const [book, setBook] = useState({})
  const [cover, setCover] = useState("")

  useEffect(() => {
    bookService.findBookById(bookId)
    .then(result => {
      setBook(result.volumeInfo)
      setCover(result.volumeInfo.imageLinks)
    })
  }, [])

  return(
      <div>
        {
          cover && <img src={cover.small} alt="jpg"/>
        }
        <h1>{book.title}</h1>
        <h3>By: {book.authors}</h3>
        <h3>Synopsis:</h3>
        <p>
          {book.description}
        </p>
      {/*  TODO render reviews for the book, must log in the make a review but can see others*/}
      </div>
  )
}
export default Details