import { forwardRef, useRef,useState } from 'react';
import img from '../assets/no-projects.png';

const RightSideBar = forwardRef(function RightSideBar({ activeNote, onAddNote,setActiveNote }, ref) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

        const [ value,setValue ] = useState(); 
        // const [ validation,setValidation ] = useState(true);

    
        

    function handleChangeAccept() {
        
        // setValidation(
        //     titleRef.current.value == '' ||
        //     descriptionRef.current.value == '' ||
        //     dateRef.current.value == ''
        // )
        
        
            setValue(() => {
                const newNote = {
                    noteTitle: titleRef.current.value,
                    noteDescription: descriptionRef.current.value,
                    noteDate: dateRef.current.value
                };
                
                onAddNote(newNote);
                console.log(newNote);
                // console.log(validation )
            
            })
        

        // console.log(validation)
    }

    return (
        <section className="absolute bottom-0 right-0 bg-slate-100 w-2/3 h-5/6 rounded-tl-3xl text-center">
            {!activeNote ? (
                <div>
                    <img src={img} alt="no-project" className="w-40 m-auto pt-10" />
                    <h2 className="text-3xl mt-12 mb-4"> No Project Selected </h2>
                    <p className="p-6">Select a project or get started with a new one</p>
                    <button
                        className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => setActiveNote(true)}
                    >
                        Create New Project
                    </button>
                </div>
            ) : (
                <div>
                    {activeNote && (
                        <section className="flex flex-col m-10">
                            <label>
                                TITLE
                                <input type="text" ref={titleRef} />
                            </label>
                            <label>
                                DESCRIPTION
                                <input type="textarea" ref={descriptionRef} />
                            </label>
                            <label>
                                DATE
                                <input type="date" ref={dateRef} />
                            </label>
                            <label className="flex flex-row">
                                <button
                                    className="bg-zinc-300 m-2 p-2 rounded-xl"
                                    onClick={handleChangeAccept}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-zinc-200 m-2 p-2 rounded-xl hover:bg-zinc-300"
                                    onClick={handleChangeAccept}
                                >
                                    Accept
                                </button>
                            </label>
                        </section>
                    )}
                </div>
            )}
        </section>
    );
});

export default RightSideBar;
