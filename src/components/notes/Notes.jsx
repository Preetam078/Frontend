import React from 'react'
import "./notes.css"
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import { useNoteDispatch } from '../../hooks/useFetch'

const Notes = ({value, toEditNote}) => {

  const dispatch = useNoteDispatch()

  const handleDelete = () => {
    dispatch({type:"DELETE NOTE", payload:value})
  }

  const handleEdit = () => {
    toEditNote(value)
  }

  return (
    <div className='tag_container'>
        <div className='tag'>
          <p>{value}</p>
          <div>
          <AiFillEdit onClick={handleEdit} className='icon' size={30}></AiFillEdit>
          <AiFillDelete onClick={handleDelete} className='icon' size={30}></AiFillDelete>
          </div>
        </div>
    </div>
  )
}

export default Notes