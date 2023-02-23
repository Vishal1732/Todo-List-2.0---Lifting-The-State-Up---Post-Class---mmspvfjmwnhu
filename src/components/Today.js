import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  
  return (
    <div id="today-list">
      <ListRender list={} />
    </div>
  );
};

export default Today;
