import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/entrySlice";

export function HomePage() {
  const count = useSelector((state) => state.entry.value);
  const entries = useSelector((state) => state.entry.entries);
  const dispatch = useDispatch();
  const typeRef = useRef();
  const amountRef = useRef();

  function handleAddEntry() {
    dispatch(
      increment({
        ID: "id" + new Date().getTime() + "username/email",
        type: typeRef.current.value,
        amount: amountRef.current.value,
        // createdAt: new Date().toString(),
        createdAt: new Date().toDateString(),
      })
    );
    // console.log("Current entries after adding:", entries);
  }
  function handleRemoveEntry(entryID) {
    dispatch(decrement(entryID));
  }

  return (
    <div className="pt-10">
      <div>
        <label>Type: </label>
        <input
          ref={typeRef}
          type="text"
          className="bg-stone-100 underline-offset-1 rounded-md"
        />
        <label>Amount: </label>
        <input
          ref={amountRef}
          type="number"
          className="bg-stone-100 underline-offset-1 rounded-md"
        />
        <button aria-label="Add entry" onClick={handleAddEntry}>
          Add Entry
        </button>
      </div>
      <div>
        <span>Count: {count}</span>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              {entry.ID} ---- {entry.amount} -- {entry.type} --{" "}
              {entry.createdAt}
              <button
                onClick={() => handleRemoveEntry(entry.ID)} // Pass the entry ID to remove
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
