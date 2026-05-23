import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link }) {
  return (
    <div className="col-6 mb-3">

      <Link to={link} className="text-decoration-none">

        <div className="project-card">

          <img
            src={image}
            alt={title}
            className="project-image"
          />

          <div className="project-title">
            {title}
          </div>

        </div>

      </Link>

    </div>
  );
}

export default Project;