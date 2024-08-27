import axios from './axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StarRating from './StarRating'
import EmojiRating from './EmojiRating'

const FeedbackForm = () => {

    let {id} = useParams()

    let navigate = useNavigate()

    let [feedbackData, setFeedbackData] = useState({
        fname: "",
        textarea: "",
        numeric_rating: "",
        star_rating: "",
        smiley_rating: "", 
        single_line_input: "", 
        radio_button: "",
        categories: "", 
        submitted: "", 
        viewed: "",
        date_published: ""
    })

    let {fname, textarea, numeric_rating, star_rating, smiley_rating, single_line_input, radio_button, categories, submitted, viewed, date_published} = feedbackData

    useEffect(() => {
        axios.get(`/feedbackdata/${id}`)
        .then(response => {
            setFeedbackData({
                ...feedbackData,
                fname: response.data.fname,
                textarea: response.data.textarea,
                numeric_rating: response.data.numeric_rating,
                star_rating: response.data.star_rating,
                smiley_rating: response.data.smiley_rating,
                single_line_input: response.data.single_line_input,
                radio_button: response.data.radio_button,
                categories: response.data.categories,
                submitted: response.data.submitted,
                viewed: response.data.viewed,
                date_published: response.data.date_published
            })
        })
    }, [])
    
    let handleChange = (e) => {
        let {name, value} = e.target;
        setFeedbackData({...feedbackData, [name]: value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let payload = {fname, textarea, numeric_rating, star_rating, smiley_rating, single_line_input, radio_button, categories, submitted, viewed, date_published}
        axios.put(`/feedbackdata/${id}`, payload)
        navigate("/")
    }


  return (
    <>
        <main className='content'>
      <section className="innerContent">
        
        <form onSubmit={handleSubmit}>
          <article>
            <img src="../images/arraw.png" alt="arrow" />
            {fname}
            <img src="../images/edit1.png" alt="edit" id='edit' />
          </article>
          <div className="form-group">
            <label>Would you like to add a comment?</label>
            <input type="textarea" name='textarea' value={textarea} onChange={handleChange} />
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>How likely is it that you will recommend us to your family and friends?</label>
            <input type="text" name='numeric_rating' value={numeric_rating} onChange={handleChange} />
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>Give a star rating for the website</label>
            <StarRating/>
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>What is your opinion of this page?</label>
            {/* <input type="text" name='smiley_rating' value={smiley_rating} onChange={handleChange} /> */}
            <EmojiRating/>
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>Do you have any suggestions to improve our website?</label>
            <input type="text" name='single_line_input' value={single_line_input} onChange={handleChange} />
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>Multiple choice - 1 answer</label>
            <div className='radiodiv'>
              <label>
                <input type="radio" name='radio_button' value="Radio 1" onChange={handleChange} />Radio 1
              </label>
              <label>
                <input type="radio" name='radio_button' value="Radio 2" onChange={handleChange} />Radio 2
              </label>
              <label>
                <input type="radio" name='radio_button' value="Radio 3" onChange={handleChange} />Radio 3
              </label>
            </div>
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <div className="form-group">
            <label>Pick a subject and provide your feedback:</label>
            <div className='btndiv'>
              <input type="button" name='categories' value="Bug" onChange={handleChange} />
              <input type="button" name='categories' value="Content" onChange={handleChange} />
              <input type="button" name='categories' value="Other" onChange={handleChange} />
            </div>
            <div className='editdelete'>
              <img src="../images/edit.png" alt="edit" />
              <img src="../images/delete.png" alt="delete" id='del' />
            </div>
          </div>

          <button className="form-button">SAVE</button>
        </form>
      </section>

      <main className='sidebar'>
      <h4>Add fields</h4>
      <section className='sidebar-content'>
        <div>
          <img src="../images/textarea_icon.png" alt="" />
          <p>Textarea</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/numerical_icon.png" alt="" />
          <p>Numeric rating</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/smiley_icon.png" alt="" />
          <p>Star rating</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/star_icon.png" alt="" />
          <p>Smiley rating</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/input_icon.png" alt="" />
          <p>Single line input</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/radio_icon.png" alt="" />
          <p>Radio button</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>

      <section className='sidebar-content'>
        <div>
          <img src="../images/cate_icon.png" alt="" />
          <p>Categories</p>
        </div>
        <img src="../images/+.png" alt="" />
      </section>
    </main>

  </main>
    
    </>
  )
}

export default FeedbackForm