import type { Project } from "./Project";

type Props = {
  project: Project;
  onClick: (project: Project) => void;
};

export const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="card-image">
        <img src={project.imageURL} alt={project.title} />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.caption}</p>
      </div>
    </div>
  );
};
