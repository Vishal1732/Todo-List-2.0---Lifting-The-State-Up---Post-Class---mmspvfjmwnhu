import "./styles.css";
import { useState } from "react";

function TodoInput(props) {
  const { onSubmit } = props;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const value = event.target["todo-input"].value;

        onSubmit(value);
      }}
    >
      <input
        style={{ width: "250px", padding: "5px" }}
        type="text"
        name="todo-input"
      />
    </form>
  );
}

function TodoItem(props) {
  // const items = props.items;
  const { items, removeItem, toggleDone } = props;

  return (
    <div className="todo-item-container">
      {items.map((el) => {
        return (
          <div className="todo-item">
            <input
              type="checkbox"
              onChange={function () {
                toggleDone(el.item);
              }}
            />
            <div className={el.done ? "strike" : ""}>{el.item}</div>
            <button
              onClick={() => {
                removeItem(el.item);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

function Todo() {
  // [ 'learn react' ]
  // [ { item: 'learn react', done: false } ]
  let [todoItems, setTodoItems] = useState([]);

  function removeItem(content) {
    const newArray = todoItems.filter(function (el) {
      if (el.item === content) {
        // don't include in the new array
        return false;
      }
      return true;
    });

    setTodoItems(newArray);
  }

  function toggleDone(content) {
    const newArray = todoItems.map(function (el) {
      if (el.item === content) {
        el.done = !el.done;
      }
      return el;
    });
    console.log(newArray);
    setTodoItems(newArray);
  }

  return (
    <>
      <h2>What do you want to do today?</h2>
      <TodoInput
        onSubmit={function (newItem) {
          // shortcut to copy and create a new reference
          setTodoItems([...todoItems, { item: newItem, done: false }]);
        }}
      />
      <TodoItem
        toggleDone={toggleDone}
        removeItem={removeItem}
        items={todoItems}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}
