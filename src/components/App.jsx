import React, { useState } from "react"
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App(){

    const [notes,setNote] = useState([]);

    function addNote(newNote){
        setNote(prevNotes=> {
           return [...prevNotes, newNote];
        })
    }

    function deleteNote(id){
        setNote(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }
    return(
        <div>
        <Header/>
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem,index) => (
            <Note id={index} key={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        ))}
        <Footer/>
        </div>
    )
}

export default App;