import { useRef, useState } from "react";
import Modal from "./Modal";
import H2 from "./H2";

const NewTask = ({ onAdd }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const changeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const clickHandler = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <H2>Invalid Input</H2>
        <p className="text-stone-700 mb-4">
          Oops ... looks like you forgot to enter a task.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={changeHandler}
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={clickHandler}
          className="text-stone-700 □hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
