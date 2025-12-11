import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({onAddTaskSubmit}) {
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  return (
  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      <Input 
        type="text" 
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button 
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium disabled:bg-slate-400 disabled:cursor-not-allowed"
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        disabled={title.trim() === ""}>
        Add Task 
      </button>
    </div>
  );
}


export default AddTask;
