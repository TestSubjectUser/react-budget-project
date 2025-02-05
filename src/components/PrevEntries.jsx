import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../store/taskSlice";
import Button from "./Button";

function PrevEntries() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const taskRef = useRef();

  function handleAddTask() {
    dispatch(addTask(taskRef.current.value));
  }
  function handleRemoveTask(entryID) {
    dispatch(removeTask(entryID));
  }

  return (
    <div>
      <h2>Taasksss...</h2>
      <div>
        <label>task: </label>
        <input
          ref={taskRef}
          type="text"
          className="bg-stone-100 underline-offset-1 rounded-md"
        />
        <Button aria-label="Add entry" onClick={handleAddTask}>
          Add task
        </Button>
        <div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.ID} ---- {task.content}
                <button
                  onClick={() => handleRemoveTask(task.ID)} // Pass the entry ID to remove
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrevEntries;
