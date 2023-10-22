import React from 'react'
import "./Note.css";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {


  const handleClick = ()=>{
    props.deleteNote(props.id)

  }
  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><DeleteIcon/></button>
      
    </div>
  )
}

export default Note
