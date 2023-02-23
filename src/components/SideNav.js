import React from "react";
import { FaRegCalendarAlt, FaInbox, FaRegCalendar } from "react-icons/fa";
import "../styles/App.css";

const SideNav = (props) => {



  return (
    <ul className="side-nav">
      <li onClick= {() => {props.change('INBOX')}}>
        <FaInbox />
        <div id="inbox-side">Inbox</div>
      </li>
      <li onClick={() => {props.change('TODAY')}}>
        <FaRegCalendarAlt />
        <div id="today">Today</div>
      </li>
      <li onClick={() => {props.change('NEXT')}}>
        <FaRegCalendar/>
        <div id="next">Next 7 Days</div>
      </li>
    </ul>
  );
};

export default SideNav;
