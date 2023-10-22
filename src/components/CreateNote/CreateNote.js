import React from 'react'
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import "./CreateNote.css"

const CreateNote = (props) => {

  const [isExpanded,setIsExpanded] = useState(false);
  const [note,setNote] = useState({
    title:"",
    content:""
  })

  const expand = ()=>{
    setIsExpanded(true)
  }


  const handleChange = (event)=>{

    const {name,value} = event.target;
     setNote((prevNote)=>{
      return{
        ...prevNote,[name]:value
      }
     })


  }

  const submitNote = (event) =>{
    event.preventDefault();
    props.addNote(note);
    setNote({
      title:"",
      content:""
    })
    setIsExpanded(false);
  }
  return (
    <div>
       <form className='create-note'>
        {isExpanded && 
        <input type='text' name='title' placeholder='TITLE' onChange={handleChange} value={note.title}/>}
        <textarea name='content' placeholder='TAKE A NOTE...' onClick={expand}  onChange={handleChange} rows={isExpanded ? 3 : 1}  value={note.content}/>
       
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon/>

          </Fab>
        </Zoom>

       </form>
      
    </div>
  )
}

export default CreateNote
