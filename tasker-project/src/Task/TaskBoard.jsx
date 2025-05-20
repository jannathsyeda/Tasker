import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const  defaultTasks={
        'id': crypto.randomUUID(),
        'title': "React",
        'description':"React lets you build user interfaces out of individual pieces called you build user interfaces out of individual",
        'tags':['js','node','npm'],
        'priority': "Low",
        'isFavorite': true
    }

    const [ tasks , setTasks ]=useState([defaultTasks])

    function addHandleTask(){

      console.log("adding")
    }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBar />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction addHandleTask={addHandleTask}/>

          <TaskList tasks={tasks}/>

         
        </div>
      </div>
    </section>
  );
}
