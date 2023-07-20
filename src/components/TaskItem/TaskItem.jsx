import styles from "./task.module.css";
import PropTypes from "prop-types";

const TaskItem = ({ tasks }) => {
  return (
    <div className="tasks">
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li className={styles.taskItem} key={task.id}>
            {task.title}
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
