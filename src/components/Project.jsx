import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link, index, topProject }) {
  return (
    <Link to={link} className="project-link text-decoration-none col-6">
      <div className={`project-card pos-${index}`}>

        {/* ===== Top Row Project (project title is displayed on top of image) ===== */}

        {topProject && (
          <div className="project-title lead fw-medium">
            {title}
          </div>
        )}

        <img src={image} alt={title} className="project-image" />

        {/* ===== Bottom Row Project (project title is displayed under the image) ===== */}

        {!topProject && (
          <div className="project-title lead fw-medium">
            {title}
          </div>
        )}
      </div>
    </Link>
  );
}

export default Project;