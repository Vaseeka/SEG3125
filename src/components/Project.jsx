import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link, titleTop }) {
  return (
    <div className="col-6 mb-4">

      <Link to={link} className="text-decoration-none text-dark">

        <div className="project-card">

          {/* TITLE ON TOP */}
          {titleTop && (
            <div className="project-title">
              {title}
            </div>
          )}

          <img
            src={image}
            alt={title}
            className="project-image"
          />

          {/* TITLE ON BOTTOM */}
          {!titleTop && (
            <div className="project-title">
              {title}
            </div>
          )}

        </div>

      </Link>

    </div>
  );
}

export default Project;