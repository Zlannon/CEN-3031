import React, { useState } from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import { nanoid } from "nanoid";


function ClaimFood(props){
    
    const [tasks, setTasks] = useState(props.tasks);

    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };

        setTasks([...tasks, newTask]);
      }
      function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
              // use object spread to make a new object
              // whose `completed` prop has been inverted
              return {...task, completed: !task.completed}
            }
            return task;
          });
          setTasks(updatedTasks);
      }
      function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
      }
      

    const taskList = tasks.map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
          />
        )
      );
      const tasksNoun = taskList.length !== 1 ? 'foods' : 'food';
      const headingText = `Currently you have ${taskList.length} ${tasksNoun} in your cart`;

      
      
      return (
        <div className="todoapp stack-large yihengbase">
            
          <h1>ClaimFood</h1>
          <Form addTask={addTask} />
          <div className="filters btn-group stack-exception">
            <FilterButton />
            
          </div>
          <h2 id="list-heading">{headingText}</h2>
          <ul
            role="list"
            /*todo-list */
            className= "todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            {taskList}
          </ul>
          
        </div>
      );

}
export default ClaimFood;