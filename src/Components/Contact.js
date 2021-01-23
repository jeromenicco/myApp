import React , { useContext } from 'react'
import { ContextClick } from '../Context'

import "./Contact.css";

const contactLinks = [
  'https://www.linkedin.com/in/jerome-nicco/', 
  'https://github.com/jeromenicco'
] 

const Contact = () => {
  const [ click ] = useContext(ContextClick)
  return (
    <div className="contact-container page">
        <h3 className='contact-title'>Contact</h3>
          <div className="contact-body-container">
            <div className={!click ? 'contact-item-container-dark' : 'contact-item-container'}>
              <ul>
                <li>
                  jeromenicco36@gmail.com
                </li>
                <li>
                  <p>Linkedln :</p>
                  <a href={contactLinks[0]} target='_blank' rel='noreferrer'>
                      @/jerome-nicco
                  </a>
                </li>
                <li>
                  <p>Github :</p>
                  
                    <a href={contactLinks[1]} target='_blank' rel='noreferrer'>jeromenicco</a>
                  
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact
