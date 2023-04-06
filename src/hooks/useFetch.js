import { useContext } from "react"
import NoteContext from "../context/noteContext";
import NoteDispatchContext from "../context/noteDispatchContext"

export const useNoteDispatch = () => {
    return useContext(NoteDispatchContext);
}

export const useNote = () => {
    return useContext(NoteContext)
}