import styles from "./tasksearch.module.css";

const TaskSearch = () => {
  return (
    <div className="task-search">
      <input
        className={styles.taskSearchInput}
        type="text"
        placeholder="write a task"
      />
      <button>Add task</button>
    </div>
  );
};

export default TaskSearch;
