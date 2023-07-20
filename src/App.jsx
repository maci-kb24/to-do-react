import "./App.css";
import TaskModal from "./components/Taskmodal/TaskModal";

const tasks = [
  { id: 1, title: "first task" },
  { id: 2, title: "second task" },
  { id: 3, title: "third task" },
  { id: 4, title: "fourth task" },
  { id: 5, title: "fifth task" },
  { id: 6, title: "sixth task" },
];

function App() {
  return (
    <>
      <TaskModal tasks={tasks} />
    </>
  );
}
``;

export default App;

//Which of these are state? Identify the ones that are not:Does it remain unchanged over time? If so, it isn’t state.Is it passed in from a parent via props? If so, it isn’t state.Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

//States
// search input text
// task items

//Step 1: Break the UI into a component hierarchy - DONE

//Step 2: Build a static version in React - DONE

//Step 3: Find the minimal but complete representation of UI state

//Step 4: Identify where your state should live
