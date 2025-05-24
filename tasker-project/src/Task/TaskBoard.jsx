import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddModal from "../AddModal";

export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "React",
    description:
      "React lets you build user interfaces out of individual pieces called you build user interfaces out of individual",
    tags: ["js", "node", "npm"],
    priority: "Low",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  console.log(tasks);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function addHandleTask(newTask,isAdd) {

    if(isAdd){
     setTasks([...tasks, newTask]);
     setShowModal(false); }
     else{
      setTasks(
      tasks.map(task=>{
        if(task.id === newTask.id){
          return newTask
        }
        return task
      }))
      
     }
    
   
    
  }

  function editHandleTask(task) {
    setTaskToUpdate(task);
    setShowModal(true);

  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBar />
        </div>

        {showModal && <AddModal onSave={addHandleTask} taskToUpdate={taskToUpdate} />}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction addHandleTaskModal={() => setShowModal(true)} />

          <TaskList tasks={tasks} OnEdit={editHandleTask} />
        </div>
      </div>
    </section>
  );
}
