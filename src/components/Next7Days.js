import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    const diffTime = Math.abs(task.date - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 8) {
      return true;
    } else {
      return false;
    }
  });


  return (
    <div id="next-list">
      <ListRender list={filteredList}/>
    </div>
  );
};

export default Next7Days;
