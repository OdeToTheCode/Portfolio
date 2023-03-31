import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const Footer = (props) => {
  const { firstName, lastName, userName } = props
  const currentYear = new Date().getFullYear()

  return (
    <footer className='container' style={{
      backgroundcolor: "grey",
      color: "blue",
      textAlign: "center",
      padding: "20px",
    }}>
      <p className="row" style={{color: 'black'}}> &copy; {currentYear} {firstName} {lastName} </p>
      <div className="row" style={{textAlign: 'center'}}>
        
        <a className='col-4'href={`https://github.com/${userName}`} target="_blank" rel="noopener noreferrer" style={{margin: '10px', color: 'black' }}><FontAwesomeIcon icon={['fab', 'github']} style={{color: 'black', paddingRight: '5px'}} />GitHub</a>

        <a className='col-4' href="https://www.linkedin.com/in/jacob-figueroa-54a319263/" target="_blank" rel="noopener noreferrer" style={{margin: '10px',color: 'black', textAlign: 'center' }}><FontAwesomeIcon icon={['fab', 'linkedin']} style={{color: 'black', paddingRight: '5px'}} />linkedin</a>

        <a className='col-4' href="./contact" target="_self" style={{margin: '10px',color: 'black' }}><FontAwesomeIcon icon={faEnvelope} style={{color: 'black',  paddingRight: '5px'}} />Contact</a>

      </div>

    </footer>
  )
} 

export default Footer;