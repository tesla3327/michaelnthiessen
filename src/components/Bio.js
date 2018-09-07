import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Michael Thiessen`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <div>
          <p>
            I'm <strong>Michael Thiessen</strong> and I write about all things{' '}
            <strong>VueJS</strong> here. You can also{' '}
            <a href="https://twitter.com/michaelthiessen">
              follow me on Twitter
            </a>
            {' '}for <strong>hot tips</strong> and insights about Vue!
          </p>
        </div>
      </div>
    )
  }
}

export default Bio
