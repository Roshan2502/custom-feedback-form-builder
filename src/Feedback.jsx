import React, { useEffect, useState } from 'react'
import axios from './axios'
import { Link } from 'react-router-dom'


const Feedback = () => {

    let [state, setState] = useState([])

    let fetchFeedback = async () => {
        let {data} = await axios.get("/feedbackdata")
        setState(data)
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    let handleDelete = (id) => {
        axios.delete(`/feedbackdata/${id}`)
        .then((response) => {
          fetchFeedback()
        })
      }

  return (
    <>
        {
            state.map((item) => {
                return (
                    <div key={item.id} className='feedback-item'>
                        <div className='icon-div'>
                            <img src="../images/note.png" alt="" />
                        </div>
                        <div  className='feedback-text'>
                            <h4>{item.fname}</h4>
                            <div>
                                <article>Submitted</article> 
                                <h5>{item.submitted}</h5>
                            </div>
                            <div>
                                <article>Viewed</article> 
                                <h5>{item.viewed}</h5>
                            </div>
                            <div>
                                <article>Date Published</article> 
                                <h5>{item.date_published}</h5>
                            </div>
                        </div>
                        <div className='btn-div'>
                            <Link to={`/view/${item.id}`}><button id='view-btn'>VIEW SUBMISSION</button></Link>
                            <div>
                                <Link to={`/feedbackform/${item.id}`}><button id='edit-btn'>EDIT</button></Link>
                                <button id='delete-btn'  onClick={()=>handleDelete(item.id)}>DELETE</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default Feedback