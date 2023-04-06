import { useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form/form";
import Notes from "./components/notes/Notes";
import Container from "./container";
import NoteContext from "./context/noteContext";
import NoteDispatchContext from "./context/noteDispatchContext";

function App() {
  const [noNotes, setNoNotes] = useState(true)
  const [editableNote, setEditableNote] = useState(null)
  const NotesReducer = (notes, action) => {

    switch (action.type) {
      case 'ADD NOTE':
        setNoNotes(false);        
        return [action.payload, ...notes];
      case 'DELETE NOTE':
        return notes.filter(note => note !== action.payload);
      case 'EDIT NOTE':
        const editIndex = notes.findIndex(note => note === editableNote);
        const editNote = [...notes];
        editNote[editIndex] = action.payload;
        setEditableNote(null);
        return editNote;
      default:
        return notes;
    }
}

  const [notes, dispatch] = useReducer(NotesReducer, []);


  const toEditNote = async (todo) => {
    await setEditableNote(notes.find(note=> note === todo))
  }

  return (
    <Container>
      <NoteContext.Provider value={notes}>
        <NoteDispatchContext.Provider value={dispatch}>

        <div className="App">
          <h1>Todo App</h1>
          <Form editableNote={editableNote} />
          {
            noNotes === true ? (
              <p>No notes to display</p>
            ) : (
              notes.map((note) => (
                <Notes key={note} value={note} toEditNote={toEditNote}/>
              ))
            )
          }
        </div>
        </NoteDispatchContext.Provider>
      </NoteContext.Provider>
    </Container>
    
  );
}

export default App;
