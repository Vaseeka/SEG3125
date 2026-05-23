import { Link } from 'react-router-dom';
import './Project.css';

function Project({ title, image, link, titleTop, position }) {
  return (
    <div className="col-6">

      <Link to={link} className="text-decoration-none text-dark">

  <div className={`project-card ${position}`}>

    {titleTop && <div className="project-title">{title}</div>}

    <img src={image} alt={title} className="project-image" />

    {!titleTop && <div className="project-title">{title}</div>}

  </div>

</Link>

    </div>
  );
}

export default Project;