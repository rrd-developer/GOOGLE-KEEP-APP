import React from 'react'
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
       <p>COPYRIGHT &copy; RRD {year}</p>
      
    </footer>
  )
}

export default Footer
