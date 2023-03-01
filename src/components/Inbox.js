import React, { useState, useRef } from "react";

const Inbox = (props) => {
 const [newTask, setNewTask] = useState(false);

  const titleRef = useRef(null);
  const calendarRef = useRef(null);

  const newTaskHandler = (e) => {
    setNewTask(true);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Task cannot be empty");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value)
    };
    props.append(newObj);
    setNewTask(false);
  };

  const cancelHandler = (e) => {
    setNewTask(false);
  };
 

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={newTaskHandler} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addHandler}>
              Add Task
            </button>
            <button className="new" onClick={cancelHandler}>
              Cancel
            </button>
            <input
              type="date"
              ref={calendarRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box">
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
