import React, { useState } from 'react'
import Feedback from './Feedback'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import axios from './axios'

const Dashboard = () => {
  let [modal, setmodal] = useState(false)

  let navigator = useNavigate()

  let [date, setDate] = useState(new Date())

  let todaysDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()

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

  let handleChange = () => {
    let {name, value} = event.target
    setFeedbackData({...feedbackData, [name]: value, date_published:todaysDate, submitted:"1", viewed:"1"})
}

  let handleCreate = async (e) => {
    e.preventDefault();
    let payload = {fname, textarea, numeric_rating, star_rating, smiley_rating, single_line_input, radio_button, categories, submitted, viewed, date_published}
    await axios.post("/feedbackdata", payload)
    navigator(`/`)
  }


  return (
    <>
    <Modal
      size='lg'
      isOpen={modal}
      toggle={() => setmodal(!modal)}
    >
      <ModalHeader
      toggle={() => setmodal(!modal)}>
        Create Feedback Form
      </ModalHeader>
      <ModalBody>
        <form className='createForm'>
          <input className='inputFeedbackName' type="text" name="fname" value={fname} onChange={handleChange}/>
          <button className='createbtn' onClick={handleCreate} >CREATE</button>
        </form>
      </ModalBody>
    </Modal>

    <div className="dashboard-container">
        <div className='dashboard-item' onClick={()=>setmodal(true)}>
            <img src="../public/images/add.png" alt="Add icon" />
            <h2>New form</h2>
        </div>
        <div className='feedback-container'>
          <Feedback/>
        </div>
    </div>
    </>
  )
}

export default Dashboard