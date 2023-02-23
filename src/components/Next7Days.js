import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();


  return (
    <div id="next-list">
      <ListRender list={}/>
    </div>
  );
};

export default Next7Days;
