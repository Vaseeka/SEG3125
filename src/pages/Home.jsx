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
                        <p>
                            Hello, I'm Vaseeka Balachandiran, an enthusiastic Software 
                            Engineering student studying at the University of Ottawa in 
                            hopes of pursuing a career in software development. I'm 
                            always eager to meet new people and make the most of opportunities. 
                            I'm also a hard worker who has achieved many academic awards 
                            throughout high school and placed on the Dean's Honour List 
                            during university.
                        </p>
                        <p>
                            Over the years, I've had the chance to perfect my skills 
                            in several different coding languages, including Bash, Python, 
                            Java, C++, HTML, CSS, Javascript and Ruby. I also love the 
                            challenge and process of breaking down a problem and working 
                            towards a solution.
                        </p>
                    </div>
                </div>
            </div>

            {/* ----- How I Work Section ----- */}

            <div className="container home-section-wrapper">
                <div className="row">
                    <div className="home-section-body text-start lead col-8">
                        <p>
                            I've designed both a promotional and educational website 
                            with others for high school and university courses in the 
                            past but I'm also currently taking a UI design course to 
                            further improve my web designing capabilities. You can view 
                            the course <a href="https://www.nngroup.com/" target="_blank">
                                here
                            </a>.
                        </p>
                        <p>
                            I've also been utilising resources such as <a href="https://www.nngroup.com/" target="_blank">
                                NN/g
                            </a> and <a href="https://medium.com/" target="_blank">
                                Medium
                            </a> to learn more about how to design a good website and <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank">
                                Net Ninja
                            </a> to learn more about how to create websites using Bootstrap and 
                            React.
                        </p>
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