import axios from './axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewSubmission = () => {

    let {id} = useParams()

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
    
  return (
    <>
    <main className='main-view'>
        <div className='view-container'>
            <article className='heading'>
                <div>
                    <img src="../public/images/arraw.png" alt="" />
                    {fname}
                </div>
                <div>
                    Created Date: {date_published}
                </div>
            </article>
            <section className='views-submitted'>
                <div><h1>{viewed}</h1> <p>VIEWS</p></div>
                <div><h1>{submitted}</h1> <p>Submitted</p></div>
            </section>
            <section className='section1'>
                <div>Page URL contains example.com/about</div>
                <div>Date: {date_published}</div>
                <div>Time: 12:00pm</div>
            </section>
            <section className='section2'>
                <article>Feedback List</article>
                <div className='maindiv'>
                    <div className='divname'><h5>Feedback </h5><p>{date_published}</p></div>
                    <label>Would you like to add a comment?</label>
                    <p id='desc'>{textarea}</p>
                    <label>How likely is it that you will recommend us to your family and friends?</label>
                    <p id='desc'>{numeric_rating}</p>
                    <label>Give a star rating for the website</label>
                    <p id='desc'>{star_rating}</p>
                    <label>What is your opinion of this page?</label>
                    <p id='desc'>{smiley_rating}</p>
                    <label>Do you have any suggestions to improve our website?</label>
                    <p id='desc'>{single_line_input}</p>
                    <label>Multiple choice - 1 answer</label>
                    <p id='desc'>{radio_button}</p>
                    <label>Pick a subject and provide your feedback:</label>
                    <p id='desc'>{categories}</p>
                </div>
            </section>
        </div>
    </main>
    </>
  )
}

export default ViewSubmission