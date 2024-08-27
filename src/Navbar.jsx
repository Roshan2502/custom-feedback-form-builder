import React from 'react'
import {feedback} from "./images/feedback.png"

const Navbar = () => {
  return (
    <nav>
        <img src={feedback} alt="LOGO" />
        <div>USER FEEDBACK</div>
    </nav>
  )
}

export default Navbar