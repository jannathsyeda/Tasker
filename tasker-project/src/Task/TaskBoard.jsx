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

  function addEditHandleTask(newTask,isAdd) {

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

  function closeHandleClick(){
    setTaskToUpdate(false)

    setShowModal(false)

  }
  function deleteTaskHandle(taskId){
    const taskDelete=tasks.filter(task=>task.id !== taskId)
    setTasks(taskDelete)

  }

  function deleteAllHandleTask(){
    console.log("hi")
    tasks.length = 0;
    setTasks([...tasks])
  }

  function handleIsFav(taskId){

    const taskIndex=tasks.findIndex(task=>task.id === taskId)

    const newTask=[...tasks];

     newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;

     setTasks(newTask)
     
  }

  function onSearchTerm(searchItem){
         console.log("hi")
    const filtered=tasks.filter(task=>
      task.title.toLowerCase().includes(searchItem.toLowerCase())

    )
    setTasks([...filtered])
  }
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBar onSearchTerm={onSearchTerm} />
        </div>

        {showModal && <AddModal onSave={addEditHandleTask} taskToUpdate={taskToUpdate} onHandleClose={closeHandleClick}/>}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction deleteTaskHandle={deleteAllHandleTask} addHandleTaskModal={() => setShowModal(true)}  />

          <TaskList tasks={tasks} OnEdit={editHandleTask} onTaskDelete={deleteTaskHandle} handleIsFav={handleIsFav} />
        </div>
      </div>
    </section>
  );
}
