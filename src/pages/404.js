import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>Oops. Try reading one of my{' '}
      <Link to={'/'}>latest articles!</Link>
    </p>
  </div>
)

export default NotFoundPage
