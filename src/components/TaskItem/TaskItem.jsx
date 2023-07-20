import styles from "./taskitem.module.css";
import { MdEditSquare, MdDeleteForever } from "react-icons/md";

const TaskItem = ({ tasks, onEditTask, onDeleteTask }) => {
  const handleEditTask = (index, newContent) => {
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];
    // Update the task content at the specified index
    updatedTasks[index] = newContent;
    // Call the onEditTask prop to update the state in the parent component
    onEditTask(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];
    // Remove the task at the specified index
    updatedTasks.splice(index, 1);
    // Call the onDeleteTask prop to update the state in the parent component
    onDeleteTask(updatedTasks);
  };

  return (
    <div className="tasks">
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li className={styles.taskItem} key={index}>
            <h2 style={{ flex: 4, margin: 0 }}>{task}</h2>{" "}
            <MdEditSquare
              size={25}
              color="green"
              onClick={() => {
                const newContent = prompt("Edit task:", task);
                if (newContent !== null) {
                  handleEditTask(index, newContent);
                }
              }}
            />
            <MdDeleteForever
              size={25}
              color="red"
              onClick={() => handleDeleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskItem;
