import React from "react";

const ListRender = (props) => {
  return (
    <>
      {props.list.map((list) => {
        return (
          <div className="box" key={list.number}>
            <div className="task">
              {list.title} ({list.date})
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListRender;
// {list.date.toLocaleDateString()}
