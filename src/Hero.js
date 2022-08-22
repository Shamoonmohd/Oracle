import React from 'react'

const Hero = ({handleLogout, user}) => {
  return (
  <section className='hero'>
    <nav>
        <h2>Welcome {user}</h2>
        <button onClick={handleLogout}>Log out</button>
    </nav>

  </section>
  )
}

export default Hero
