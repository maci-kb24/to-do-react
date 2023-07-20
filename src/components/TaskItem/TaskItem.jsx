import styles from "./taskitem.module.css";
import PropTypes from "prop-types";
import { MdEditSquare, MdDeleteForever } from "react-icons/md";

const TaskItem = ({ tasks }) => {
  return (
    <div className="tasks">
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li className={styles.taskItem} key={task.id}>
            <h2 style={{ flex: 4, margin: 0 }}>{task.title}</h2>{" "}
            <MdEditSquare size={25} color="green" />
            <MdDeleteForever size={25} color="red" />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define prop validation using PropTypes
TaskItem.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskItem;
