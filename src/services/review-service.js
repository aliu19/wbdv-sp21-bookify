import userService from "./user-service"
import bookService from "./book-service"


const REVIEWS_URL = "https://lit-woodland-33518.herokuapp.com/api"

export const findReviewsForBook = async (title) => {
    const reviews = await fetch(`${REVIEWS_URL}/books/${title}/reviews`)
        .then(response => response.json())
    const users = await Promise.all(reviews.map(u => userService.getUserById(u.userId)))
    const books = await Promise.all(reviews.map(u => bookService.findBookById(u.bookId, true)))
    const result = await reviews.map((r, i) => ({ ...r, user: users[i], book: books[i] }))
    return result
}

export const findReviewsForUser = async (uid) => {
    const reviews = await fetch(`${REVIEWS_URL}/users/${uid}/reviews`)
        .then(response => response.json())
    const books = await Promise.all(reviews.map(u => bookService.findBookById(u.bookId, true)))
    const result = await reviews.map((r, i) => ({ ...r, book: books[i] }))
    return result
}

export const findAllReviews = () => {
    return fetch(`${REVIEWS_URL}/reviews`)
        .then(response => response.json())
}

const createReview = (review) => {
    return fetch(`${REVIEWS_URL}/reviews`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

//  app.delete("/api/reviews/:rid", deleteReview)

const deleteReview = rid => {
    return fetch(`${REVIEWS_URL}/reviews/${rid}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const updateReview = (rid, review) => {
    return fetch(`${REVIEWS_URL}/reviews/${rid}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findReviewsForHome = async () => {
    const reviews = await fetch(`${REVIEWS_URL}/home/reviews`)
        .then(response => response.json())
    const users = await Promise.all(reviews.map(u => userService.getUserById(u.userId)))
    const books = await Promise.all(reviews.map(u => bookService.findBookById(u.bookId, true)))
    const result = await reviews.map((r, i) => ({ ...r, book: books[i], user: users[i] }))
    return result
}

export default {
    findReviewsForBook,
    findReviewsForUser,
    findAllReviews,
    createReview,
    findReviewsForHome,
    updateReview,
    deleteReview
}