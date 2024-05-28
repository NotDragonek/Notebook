import LeftSideBar from "./components/left-sidebar";
import { useState  } from "react";


let notes = []

function App() {
    const [ noteTitle,setNoteTitle] = useState({'title': ''});
    const [ isUsed,setIsUsed ] = useState(true)
    function handleNew(){
      setIsUsed(x => !x)
    }

    function handleTitle(e){
      setNoteTitle({'title': e.target.value})
      notes.push(noteTitle)
      console.log(notes)
    }

  return <div className="flex">
      <LeftSideBar 
      onClick={handleNew}
      active={isUsed}
      onChange={handleTitle}/>
    </div>
  
}

export default App;


