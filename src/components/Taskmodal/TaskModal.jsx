import styles from "./taskmodal.module.css";
import { useState } from "react";

const TaskModal = () => {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handlechange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (event) => {
    event.preventDefault(); // Prevent form submission (if inside a form
    setTodoList([...todolist, newTask]);
  };

  return (
    <div className={styles.taskModal}>
      <div>
        <h1>To Do Tasks List</h1>
        <form onSubmit={addTask}>
          <input
            style={{ width: "34%", padding: "12px" }}
            onChange={handlechange}
          />
          <button onClick={addTask} type="submit">
            Add task
          </button>
        </form>
      </div>
      <div className="list">
        <ul>
          {todolist.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskModal;
