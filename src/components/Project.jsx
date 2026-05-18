import { Link } from 'react-router-dom';

function Project({ title, image, link }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">

      <Link to={link} className="text-decoration-none">

        <div className="project-card">

          <img
            src={image}
            alt={title}
            className="project-image"
          />

          <div className="overlay">
            <h3>{title}</h3>
          </div>

        </div>

      </Link>

    </div>
  );
}

export default Project;