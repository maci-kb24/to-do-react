import TaskItem from "../TaskItem/TaskItem";
import TaskSearch from "../tasksearch/TaskSearch";
import styles from "./taskmodal.module.css";
import { useState } from "react";

const TaskModal = () => {
  const [tasks, setTasks] = useState([]);

  const handleEditTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.taskModal}>
      <h1>To Do Tasks List</h1>
      <TaskSearch tasks={tasks} onAddTasks={setTasks} />
      <TaskItem
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskModal;
