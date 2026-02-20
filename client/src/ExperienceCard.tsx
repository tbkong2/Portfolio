import type { Experience } from "./Experience";

type Props = {
  experience: Experience;
  onClick: (experience: Experience) => void;
};

export const ExperienceCard = ({ experience, onClick }: Props) => {
  return (
    <div className="experience-card" onClick={() => onClick(experience)}>
      <div className="experience-image">
        <img src={experience.LogoURL} alt={experience.title} />
      </div>
      <div className="experience-content">
        <h3>{experience.title}</h3>
        <p>{experience.caption}</p>
        <small className="employment-time">{experience.employmenttime}</small>
      </div>
    </div>
  );
};
