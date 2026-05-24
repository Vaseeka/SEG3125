import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link, index, topProject }) {
  return (
    <Link to={link} className="text-decoration-none text-dark col-6">
      <div className={`project-card pos-${index}`}>

        {/* ===== Top Project ===== */}

        {topProject && (
          <div className="project-title display-6">
            {title}
          </div>
        )}

        <img src={image} alt={title} className="project-image" />

        {/* ===== Bottom Project ===== */}

        {!topProject && (
          <div className="project-title display-6">
            {title}
          </div>
        )}
      </div>
    </Link>
  );
}

export default Project;