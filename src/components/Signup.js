import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Signup extends React.Component {
  state = {
    email: '',
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: rhythm(1.5),
          width: '100%',
        }}
      >
        <div
          id="mc_embed_signup"
          style={{
            padding: rhythm(0.7),
            background: '#eef3f6',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <form style={{ marginBottom: rhythm(0.5) }} action="https://michaelnthiessen.us7.list-manage.com/subscribe/post?u=aac07b28d06210ba964471dcf&amp;id=a98572f937" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h3 style={{ marginTop: rhythm(0.5), marginBottom: rhythm(0.3) }}>Get my latest articles</h3>
              <p>Subscribe to get notified whenever I publish a new article!</p>
              <div className="mc-field-group" style={{ width: '100%' }}>
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input
                  type="email"
                  value={this.state.email}
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  onChange={this.handleChange}
                  style={{
                    marginBottom: rhythm(0.5),
                    borderRadius: '4px',
                    border: '1px solid #b3d1e5',
                    width: '300px',
                  }}
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '-5000px',
                }}
                aria-hidden="true"
              >
                <input type="text" name="b_aac07b28d06210ba964471dcf_a98572f937" tabIndex="-1" value="" />
              </div>
              <div className="clear">
                <input style={{
                  borderRadius: '4px',
                  border: 'none',
                  background: '#348fcb',
                  padding: '3px 15px',
                  fontSize: rhythm(0.5),
                  fontWeight: 'bold',
                  color: 'white',
                  textTransform: 'uppercase',
                  width: '250px',
                }} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;
