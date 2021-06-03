import React from 'react'

export default function TodoList() {
    return (
        <div>
           <h1 className ='todo'>Todo App</h1> 
           <input className="search" input name="q" type="search" title="Add your new todo" placeholder="Add your new todo"></input><button>+</button>

           <div className ="list">
                <ul>
                      <span className ="buy"><li>Buy a new gaming laptop</li></span>
                      <span className ="task"><li>Complete a previous task</li></span>
                      <span className ="dance"><li>Create a dance video</li></span>
                      <span className ="new"><li>Create a new portfolio site</li></span>
                </ul>
           </div>
           <span className ="clear">
               <h2>You have 4 pending tasks</h2><button>Clear All</button>
           </span>
           
        </div>
    )
}
