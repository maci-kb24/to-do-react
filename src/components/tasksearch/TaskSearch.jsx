import styles from "./tasksearch.module.css";

const TaskSearch = ({ tasks, onAddTasks }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = e.target.elements.taskInput.value; // Get the value of the input field
    if (newTask.trim() !== "") {
      onAddTasks([...tasks, newTask]); // Add the new task to the tasks array
      e.target.reset(); // Clear the input field after submitting
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        className={styles.taskSearchInput}
        type="text"
        name="taskInput"
        placeholder="write a task"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskSearch;
