import React from 'react'
import Review from "./Review"

const ReviewList = (props) => {

  const reviewArray = props.reviews.map((review) => {
    return (
      <div>
        <p>{review.name}</p>
        <p>{review.rating}</p>
        <p>{review.content}</p>
        <hr></hr>
      </div>
    )
  })

  return(
    <div>
      {reviewArray}
    </div>
  )
}

export default ReviewList
