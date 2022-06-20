import React, { useState } from "react";

function CreateArea({onAdd}) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [isExpand,setExpand] = useState(false);

    function handleChange(e){
        const {name, value} = e.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(e){
        onAdd(note);
        setNote({title:"",
    content:""});
        e.preventDefault();

    }

    function expand(){
      setExpand(true);
    }

  return (
    <div>
      <form>
        {isExpand ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null}
        <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpand ? "3" : "1"} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
