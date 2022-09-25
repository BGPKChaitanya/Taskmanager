import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShowTask from "./ShowTask";

const TaskManager = (props) => {
  const { list } = props;
  const [task, setTask] = useState("");
  const [tag, setTag] = useState("Health");
  const [taskList, setTaskList] = useState([]);
  const [filterList, setFilterList] = useState(taskList);

  const onSubmitTask = (event) => {
    event.preventDefault();
    setTaskList([...taskList, { Task: task, Tag: tag }]);
    setFilterList([...taskList, { Task: task, Tag: tag }]);
    console.log(taskList);
  };

  const filterTask = (id) => {
    setFilterList(taskList.filter((tas) => tas.Tag === id));
    console.log(filterList);
    console.log(id);
  };

  return (
    <div>
      <div>
        <h1>Create a Task!</h1>
        <form onSubmit={onSubmitTask}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter the task here"
          />
          <label htmlFor="tag">Tags</label>
          <select id="tag" onChange={(e) => setTag(e.target.value)}>
            {list.map((t) => (
              <option key={t.optionId} value={t.optionId}>
                {t.displayText}
              </option>
            ))}
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div>
        <h1>Tags</h1>
        <ul>
          {list.map((ta) => (
            <li key={ta.optionId}>
              <ShowTask ta={ta} filterTask={filterTask} />
            </li>
          ))}
        </ul>

        <h1>Tasks</h1>
        {filterList.length === 0 ? (
          <p>No Tasks Added Yet</p>
        ) : (
          <ul>
            {filterList.map((tasks) => (
              <li key={uuidv4()}>
                <p>{tasks.Task}</p>
                <p>{tasks.Tag}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
