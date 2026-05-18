import './Project.css';

function Project({ title, image }) {
  return (
    <div className="col-6 mb-3">

      <div className="project-card">

        <img src={image} alt={title} className="project-image"/>

        <div className="project-title">
          {title}
        </div>

      </div>

    </div>
  );
}

export default Project;