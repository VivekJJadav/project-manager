import Projects from "./Projects";
import NewProjects from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import { useState } from "react";
import Content from "./Content";

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const addTaskHandler = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const deleteTaskHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const addProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const projectHandler = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const contentHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const cancleHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  function deleteHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectId !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const selectedProjectTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <Content
      project={selectedProject}
      onDelete={deleteHandler}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
      tasks={selectedProjectTasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProjects onAdd={projectHandler} onCancle={cancleHandler} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={addProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projects
        onAddProject={addProjectHandler}
        addedProjects={projectState.projects}
        onContent={contentHandler}
        contentId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
};

export default App;
