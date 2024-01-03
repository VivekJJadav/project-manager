import NoPorjectImage from "../components/notepad img.jpeg";
import Button from "./Button";
import H2 from "./H2";

const NoProjectSelected = ({ onAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoPorjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <H2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </H2>
      <p className="text-stone-400 mb-4">
        Select a project or start with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
