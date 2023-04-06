import React, { useEffect, useState } from 'react';
import { useNoteDispatch } from '../../hooks/useFetch';
import './form.css';

const Form = ({editableNote}) => {
  
  const [todo, setTodo] = useState('');
  const dispatch = useNoteDispatch()
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo !== '') {

      if(editableNote === null) {
         dispatch({type:"ADD NOTE", payload:todo})
      }
      else{
        dispatch({type:"EDIT NOTE", payload:todo})
      }
      setTodo('')
    }

  }

  useEffect(()=> {
    if(editableNote !== null) {
      setTodo(editableNote)
    }
  },[editableNote])

  return (
    <div className='container'>
      <form className='form' >
        <label className='label' htmlFor='note'>
        {
          editableNote === null ? "Add your TODOs":"Edit your TODO"
        }
        </label>
        <input
          name='note'
          onChange={handleChange}
          className='input'
          value={todo}
          type='text'
          placeholder='Enter your Note'
        />
        <button onClick={handleSubmit} className='button'>Add Note</button>
      </form>
    </div>
  );
};

export default Form;
