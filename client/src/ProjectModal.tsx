import { useEffect } from "react";
import type { Project } from "./Project";

type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-caption">{project.caption}</p>
        </div>

        <div className="modal-body">
          <video className="modal-video" controls autoPlay muted playsInline>
            <source src={project.videoURL} type="video/mp4" />
          </video>

          <h3>About</h3>
          <p>{project.description}</p>

          <h3>Tools</h3>
          <div className="tool-chips">
            {project.tools.map((t) => (
              <span key={t} className="tool-chip">{t}</span>
            ))}
          </div>

          <div className="modal-actions">
            <a className="modal-link" href={project.githubURL} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
