import LeftSideBar from "./components/left-sidebar";
import RightSideBar from "./components/right-sidebar";
import { useState } from "react";

function App() {
    const [numberOfNotesArr, setNumberOfNotesArr] = useState([]);
    const [tooMany, setTooMany] = useState(false);
    const [activeNote, setActiveNote] = useState(false);

    function handleNewNote() {
        setActiveNote(true);
    }

    function addNote(data) {
        setNumberOfNotesArr(prevNotes => [...prevNotes, data]);
        setActiveNote(false); 
        console.log(numberOfNotesArr)
    }

    function onClickArray() {

    }

    return (
        <div className="flex">
            <LeftSideBar
                onClick={handleNewNote}
                array={numberOfNotesArr}
                tooManyNotes={tooMany}
                onClickArray={onClickArray}
            />

            <RightSideBar
                note={numberOfNotesArr}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                onAddNote={addNote}
            />
        </div>
    );
}

export default App;
