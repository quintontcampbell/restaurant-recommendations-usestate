import React, { useState } from 'react'

const ReviewForm = props => {
  
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: ""
  })
  
  const handleInputChange = event => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const clearForm = event => {
    event.preventDefault()
    setReviewRecord({ 
      name: "",
      rating: "",
      content: ""
    })
  }
  
  const onSubmitHandler = event => {
    event.preventDefault()
    props.onReviewSubmitted(reviewRecord)
    setReviewRecord({ 
      name: "",
      rating: "",
      content: ""
    })
  }
  
  return (
    <form className="callout" onSubmit={onSubmitHandler}>
      <label>
        Name:
        <input 
          type='text'
          name='name'
          onChange={handleInputChange}
          value={reviewRecord.name}
          />
      </label>

      <label>
        Rating:
        <input name='rating' onChange={handleInputChange} value={reviewRecord.rating}/>
      </label>

      <label>
        Comment:
        <textarea 
          name='content'
          onChange={handleInputChange}
          value={reviewRecord.content}
          />
      </label>

      <div className='button-group'>
        <button className="button" onClick={clearForm}>
          Clear
        </button>
        <input className='button' type='submit' value='Submit'/>
      </div>
    </form>
  )
}
export default ReviewForm