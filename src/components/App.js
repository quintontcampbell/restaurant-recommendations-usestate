import React, { useState } from "react"
import Restaurant from "./Restaurant"
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import reviews from "../constants/reviews"

const App = props => {
  const [reviews, setReviews] = useState(reviews)

  const reviewSubmittedHandler = review => {
    setReviews([...reviews, review])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList reviews={reviews}/>
          </div>

          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm onReviewSubmitted={reviewSubmittedHandler}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
