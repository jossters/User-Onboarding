import React from 'react'

export default function Friend({ userDe }) {
  if (!userDe) {
    return <h3>Working fetching your user &apos;s info...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{userDe.name}</h2>
      <p>Email: {userDe.email}</p>
      <p>Password: Valid </p>
      <p>Terms: Agreed </p>
    </div>
  )
}

 