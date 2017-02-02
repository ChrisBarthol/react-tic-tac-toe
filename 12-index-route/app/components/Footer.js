import React from 'react';
require('../styles/nav.css');

function Footer (props) {
  return (
    <footer>
      <div className="footerWrapper text-center">
        <div className='footerSocial'>
          <ul>
            <li>
              <a href='https://www.facebook.com' className='facebook' title="Facebook">
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' className='twitter' title='Twitter'>
                <i className="fa fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com' className='linkedin' title='LinkedIn'>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
          <p> Copyright © 2017 Chris Barthol </p>
        </div>
        <div className="footerContact">
          <div className="vertical-center">
            <p> Contact </p>
            <p className="white"> chrisbarthol@gmail.com </p>
          </div>
        </div>
        <div className="footerLogo">
          <ul>
            <li>
              <a href='https://www.github.com' className='github' title="Github">
                <i className="devicon-github-plain"></i>
              </a>
            </li>
            <li>
              <a href='https://facebook.github.io/react/' className='react' title="React">
                <i className="devicon-react-original"></i>
              </a>
            </li>
            <li>
              <a href='https://www.ruby-lang.org/en/' className='ruby' title="Ruby">
                <i className="devicon-ruby-plain"></i>
              </a>
            </li>
            <li>
              <a href='https://www.python.org/' className='python' title="Python">
                <i className="devicon-python-plain"></i>
              </a>
            </li>
            <li>
              <a href='https://www.javascript.com/' className='javascript' title="Javascript">
                <i className="devicon-javascript-plain"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
