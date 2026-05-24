import './Home.css';

import Project from '../components/Project';
import projects from '../data/projects.json';

function Home() {
  return (
    <div className="container-fluid home pb-4">
        <div className="container pb-4">

            {/* ----- Header ----- */}
            
            <div className="home-header-wrapper">
                <div className="home-header-title text-center display-2 fw-medium pt-3 pb-3 mt-0">
                    Vaseeka Balachandiran
                </div>

                <div className="home-header-subtitle text-center display-6 pb-4 mb-5">
                    Software Engineer
                </div>
            </div>

            {/* ----- About Me Section ----- */}

            <div className="container home-section-wrapper">
                <div className="row"> 
                    <div className="home-section-title text-center display-4 fw-medium col-4">
                        About Me
                    </div>

                    <div className="home-section-body text-start lead col-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, distinctio quod corporis magni amet asperiores temporibus.
                        Quas culpa voluptatem eum saepe ratione?
                    </div>
                </div>
            </div>

            {/* ----- How I Work Section ----- */}

            <div className="container home-section-wrapper">
                <div className="row">
                    <div className="home-section-body text-start lead col-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, distinctio quod corporis magni amet asperiores temporibus.
                        Quas culpa voluptatem eum saepe ratione?
                    </div>

                    <div className="home-section-title text-center display-4 fw-medium col-4">
                        How I Work
                    </div>
                </div>
            </div>

            {/* ----- My Projects Section ----- */}

            <div className="home-projects-wrapper mt-5">
                <div className="home-projects-title display-4 fw-medium p-4">
                    My Projects
                </div>

                <div className="row g-3">
                    {projects.map((project, index) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        link={project.link}
                        index={index}
                        topProject={index < 2}
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;