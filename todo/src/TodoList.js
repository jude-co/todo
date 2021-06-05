import React from 'react'

export default function TodoList() {
    return (
        <div>
           <h1 className ='todo'>Todo App</h1> 
            <input className="search" input name="q" type="search" placeholder="Add your new todo"></input><button className="add">+</button>

            <div className ="list">
                
             <span className ="buy">Create a new dance video</span>
             <button className="edit">Edit</button>
             <button className="delete">Delete</button>

           </div>
           <span className ="clearall">
               <button className="clear">Clear All</button>
           </span>
           
        </div>
    )
}
