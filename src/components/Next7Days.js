import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date("10/4/2022");
  console.log(date)
  const nseven=props.list.filter((itm)=>{
    const d=new Date(itm.date);
    console.log(d,"ddddd");
    return(
        d<=date
    )
  })
  console.log(nseven)
  return (
    <div id="next-list">
      <ListRender list={nseven}/>
    </div>
  );
};

export default Next7Days;
