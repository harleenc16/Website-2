import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
              <section className='footer-subscription'>
              <div class='footer-logo'>
           <p className='connect'> Let's stay connected. </p>
          </div>
          
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/harleenc16'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              target='_blank'
              class='social-icon-link salesforce'
              href='https://trailblazer.me/id/hchaudhary16'
              aria-label='Salesforce'
            > 
              <i class="fab fa-salesforce" />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/harleen-chaudhary-5b3b32160'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
          <small class='website-rights'>Harleen Chaudhary © 2021</small>
      </section>
    </div>
    )
}


export default Footer;
