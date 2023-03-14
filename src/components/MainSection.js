import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";



const MainSection = (props) => {
  const mylist = [
    { number: 1, title: "Let's complete this", date: new Date("9/27/2022") },
    { number: 2, title: "Should sleep at 9pm", date: new Date("9/28/2022") },
    { number: 3, title: "Should complete react", date: new Date("10/5/2022") },
  ];

  const [list, setList] = useState(mylist);
  return (
    <div className="main-section">
      {props.active === "INBOX" && (
        <Inbox list={list} append={setList} />
      )}
      {props.active === "TODAY" && <Today list={list.filter(li => li.date.toLocaleDateString() == new Date().toLocaleDateString)} />}
      {props.active === "NEXT" && <Next7Days list={list} />}
    </div>
  );
};

export default MainSection;
