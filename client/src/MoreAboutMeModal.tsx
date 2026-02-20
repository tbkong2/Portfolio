type Props = {
  onClose: () => void;
};

export function MoreAboutMeModal({ onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>More About Me</h2>
        <p>
          Hi, Welcome to my Portfolio, some of my hobbies are weightlifting, kickboxing, jiu-jitsu, golf, volleyball, and hiking. I also enjoy reading books and journalling. I have a passion for learning and self-improvement, and I am always looking for new challenges and opportunities to grow both personally and professionally. I am excited to share my projects and experiences with you, and I hope you find my portfolio informative and engaging. Thank you for visiting!
        </p>
        <img src="images/tone.jpg" alt="Tony Kong" className="Tony-image" />
      </div>
    </div>
  );
}