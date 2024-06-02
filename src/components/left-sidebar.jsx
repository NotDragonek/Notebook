import React, { useState } from "react";

  export default function LeftSideBar({ tooManyNotes,array,onClick,onClickArray }) {

  return (
    <section className="absolute bottom-0 left-0 bg-zinc-900 w-1/3 h-5/6 rounded-tr-3xl text-center">
      <h2 className="text-white p-8 font-bold text-3xl">Your Projects</h2>
        <button type="button" className="btn btn-secondary " onClick={onClick}>
          {!tooManyNotes ? "+ Add new Project" : "Its too many number of notes !" }
        </button>
        <ul>
          {
            array.map(item =>{
              return <li className="h-11 mt-1 text-white" key={item}><button className="w-100 h-100">{item.noteTitle} onClick={onClickArray}</button></li>
            })
          }
        </ul>
    </section>
  );
}
