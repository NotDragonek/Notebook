export default function LeftSideBar({ onClick,active,onChange }){

    return <section className="absolute bottom-0 left-0 bg-black w-1/3 h-4/5 rounded-tr-3xl text-center">
        <h2 className="text-white p-8 font-400 font-bold">Your Projects</h2>
        {active ? <button type="button" className="btn btn-secondary" onClick={onClick}>Add new</button> : 
        <form>
            <input type="text" className="w-2/4 h-8 border-none focus:border-sky-300 m-4 rounded-2xl" on={onChange} />
            <button type="button" className="btn btn-secondary" onClick={onClick}>+</button>
        </form>
        }
        <div>
            {/*  TODO CODE */}
        </div>
    </section>
}