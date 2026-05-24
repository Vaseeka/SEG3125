import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link, index, labelTop }) {
  return (
    <Link to={link} className="text-decoration-none text-dark col-6">
      <div className={`project-card pos-${index}`}>

        {/* TOP LABEL */}
        {labelTop && (
          <div className="project-title">
            {title}
          </div>
        )}

        <img src={image} alt={title} className="project-image" />

        {/* BOTTOM LABEL */}
        {!labelTop && (
          <div className="project-title">
            {title}
          </div>
        )}

      </div>
    </Link>
  );
}

export default Project;