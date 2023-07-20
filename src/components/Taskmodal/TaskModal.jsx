import TaskItem from "../TaskItem/TaskItem";
import TaskSearch from "../tasksearch/TaskSearch";
import styles from "./taskmodal.module.css";
import PropTypes from "prop-types";

const TaskModal = ({ tasks }) => {
  return (
    <div className={styles.taskModal}>
      <h1>To Do Tasks List</h1>
      <TaskSearch />
      <TaskItem tasks={tasks} />
    </div>
  );
};

// Define prop validation using PropTypes
TaskModal.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskModal;
