import TaskItem from "./TaskItem";
import TaskSearch from "./TaskSearch";

const TaskModal = () => {
  return (
    <div className="task-modal">
      <h1>To Do Tasks List</h1>
      <TaskSearch />
      <TaskItem />
    </div>
  );
};

export default TaskModal;
