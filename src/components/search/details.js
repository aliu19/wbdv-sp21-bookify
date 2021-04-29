import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import bookService from '../../services/book-service'
import parse from "html-react-parser"
import styles from './details.module.scss'
import { Fragment } from "react";

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
    <div className={`${styles["details"]} row`}>
      <div className="col-12 col-md-3 mb-4">
        {
          cover && <img className="img-fluid" src={cover.small} alt={`Book cover for "${book.title}"`} />
        }
      </div>
      <div className="col-12 col-md-9">
        <h1>{book.title}</h1>
        <h3 className="small-heading font-italic mt-4 text-secondary">By: {book.authors || 'Unknown'}</h3>
        {book.description && <Fragment>
          <h3 className="small-heading mt-4">Synopsis:</h3>
        <div className={styles["book-description"]}>
          {parse(book.description || "")}
          </div>
        </Fragment>}
      </div>
      {/*  TODO render reviews for the book, must log in the make a review but can see others*/}
      </div>
  )
}
export default Details