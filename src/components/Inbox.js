import React, { useState, useRef } from "react";

const Inbox = (props) => {
 

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={}>
              Add Task
            </button>
            <button className="new" onClick={}>
              Cancel
            </button>
            <input
              type="date"
              ref={}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={}>
              <div className="task">
                {} ({})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
