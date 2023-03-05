import React, { useState, useRef, useEffect } from "react";

const Inbox = (props) => {
 
  const [newTask, setTask] = useState(false);
 
  const [ele, setele] = useState({number: 1, title: "haha", date: "1-1-2020"});
  const [added, setadded] =useState(4);
  const text = useRef(null);
  const ddate = useRef(null);
  function updateText(e){
    e.preventDefault();
    setadded(added+1);
    setele({number: added, title: text.current.value, date: (new Date(ddate.current.value)).toLocaleDateString("en-US")})
  }
  useEffect(()=>{
      if(added>4){
        props.append(ele);
      }
    
  },[ele])
  console.log(added);
  //console.log(ele);
  
  return (
    
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>{setTask(true)}} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={text}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={(e)=>{updateText(e)}}>
              Add Task
            </button>
            <button className="new" onClick={()=>{setTask(false)}}>
              Cancel
            </button>
            <input
              type="date"
              ref={ddate}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
