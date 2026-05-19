import Project from '../components/Project';
import projects from '../data/projects.json';

function Home() {
  return (
    <div className="container">
        <div className="text-center display-2"><code>Vaseeka Balachandiran</code></div>
        <div className="text-center display-6"><code>Software Engineer</code></div>
        <div className="container my-4 border">
            <div className="row">
                <div className="text-center align-self-center display-4 col-4">About Me</div>
                <div className="text-start lead col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio quod corporis magni amet asperiores temporibus. Quas culpa voluptatem eum saepe ratione? Quaerat maiores dolorum corrupti voluptatibus quae quibusdam ratione.</div>
            </div>
            
        </div>
        <div className="container my-3 border">
            <div className="row">
                
                <div className="text-start lead col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio quod corporis magni amet asperiores temporibus. Quas culpa voluptatem eum saepe ratione? Quaerat maiores dolorum corrupti voluptatibus quae quibusdam ratione.</div>
                <div className="text-center align-self-center display-4 col-4">How I Work</div>
            </div>   
        </div>


        <h2 className="mt-5 text-center">Case Studies</h2>

        <div className="row mt-3">

            {projects.map((project) => (
            <Project key={project.id} title={project.title} image={project.image}/>
            ))}

        </div>
    </div>
  );
}

export default Home;

/*

function Home() {
  return (
    <div className="container">
        <div class="text-center display-2"><code>Vaseeka Balachandiran</code></div>
        <div class="text-center display-6"><code>Software Engineer</code></div>
        <div className="container my-4 border">
            <div className="row">
                <div class="text-center align-self-center display-4 col-4">About Me</div>
                <div class="text-start lead col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio quod corporis magni amet asperiores temporibus. Quas culpa voluptatem eum saepe ratione? Quaerat maiores dolorum corrupti voluptatibus quae quibusdam ratione.</div>
            </div>
            
        </div>
        <div className="container my-3 border">
            <div className="row">
                
                <div class="text-start lead col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio quod corporis magni amet asperiores temporibus. Quas culpa voluptatem eum saepe ratione? Quaerat maiores dolorum corrupti voluptatibus quae quibusdam ratione.</div>
                <div class="text-center align-self-center display-4 col-4">How I Work</div>
            </div>
            
        </div>

        <div className="container">
            <div className="row">
                <div class="text-center lead col-6 my-3 border">Service Site</div>
                <div class="text-center lead col-6 my-3 border">Memory Game</div>
            </div>
            <div className="row">
                <div class="text-center lead col-6 border">Service Site Img</div>
                <div class="text-center lead col-6 border">Memory Game Img</div>
            </div>
            <div className="row">
                <div class="text-center align-self-center display-4 border">Case Studies</div>
            </div>
            <div className="row">
                <div class="text-center lead col-6 border">E-Commerce Site Img</div>
                <div class="text-center lead col-6 border">Analytics Site Img</div>
            </div>
            <div className="row">
                <div class="text-center lead col-6 my-3 border">E-Commerce Site</div>
                <div class="text-center lead col-6 my-3 border">Analytics Site</div>
            </div>
            
        </div>
    </div>
  );
}

export default Home;
*/