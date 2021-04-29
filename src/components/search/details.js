import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import bookService from '../../services/book-service'
import parse from "html-react-parser"
import styles from './details.module.scss'

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
  }, [bookId])

  return(
    <div className="d-flex">
      <div >
        {
          cover && <img className="img-fluid" src={cover.small} alt={`Book cover for "${book.title}"`} />
        }
      </div>
      <div>
        <h1>{book.title}</h1>
        <h3>By: {book.authors}</h3>
        <h3 className="small-heading">Synopsis:</h3>
        <div className={styles["book-description"]}>
          {parse(book.description || "")}
        </div>
      </div>
      {/*  TODO render reviews for the book, must log in the make a review but can see others*/}
      </div>
  )
}
export default Details