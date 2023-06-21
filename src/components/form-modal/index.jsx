/* eslint-disable react/prop-types */
import { useState } from 'react'
import './styles.css'

import {} from 'phosphor-react'
export function FormModal({ onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // Perform validation if needed

    // Send the message data to the server or perform necessary actions

    // Clear the form fields
    setName('')
    setEmail('')
    setMessage('')
    onClose()
    // Show a confirmation message or take further actions
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <button type='button' className="close" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h3>Write a message</h3>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="field">
            {' '}
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            {' '}
            <label>Message:</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
