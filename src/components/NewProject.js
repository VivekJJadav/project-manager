import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import H2 from "./H2";

const NewProjects = ({ onAdd, onCancle }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <H2>Invalid Input</H2>
        <p className="text-stone-700 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancle}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              type="submit"
              onClick={saveHandler}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title} />
          <Input label="Description" type="text" textarea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProjects;
