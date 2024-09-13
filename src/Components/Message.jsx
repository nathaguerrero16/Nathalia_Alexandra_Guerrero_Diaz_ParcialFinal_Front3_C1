import React from 'react'

function Message({ patient }) {
  return (
    <div>
      <h2>Gracias, {patient.name}!</h2>
      <h4>Te enviamos un correo a {patient.email}.</h4>
    </div>
  )
}

export default Message
