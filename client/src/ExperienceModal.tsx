import { useEffect } from "react";
import type { Experience } from "./Experience";

type Props = {
  experience: Experience;
  onClose: () => void;
};

export function ExperienceModal({ experience, onClose }: Props) {
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
          <h2>{experience.title}</h2>
          <p className="modal-caption">{experience.caption}</p>
          <small className="employment-time">{experience.employmenttime}</small>
        </div>

        <div className="modal-body">
            <img src={experience.pictureURL} alt={experience.title} className="modal-image" />          

          <h3>About</h3>
          <p>{experience.description}</p>

          <h3>Tools</h3>
          <div className="tool-chips">
            {experience.tools.map((t) => (
              <span key={t} className="tool-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
