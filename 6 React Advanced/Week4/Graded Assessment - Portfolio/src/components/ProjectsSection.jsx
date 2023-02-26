import Project from './Project'
import profile from '../assets/project.jpg'
import projects from './projects'

const Landing = () => {
    return (
        <section className="p-10 scroll-m-[40px] justify-center items-center text-center text-slate-100 bg-red-900" id='projects'>
            <h1 className='text-3xl font-bold mb-10'>Featured Projects</h1>

            <div className="projects-container w-full flex-col md:grid md:grid-cols-2 gap-10">
                {
                    projects.map(project => {
                        return(
                        <Project
                            name={project.name}
                            image={project.image}
                            desc={project.desc}
                            link={project.link}
                            key={project.link}
                        />)
                    })
                }
            </div>
        </section>
    )
}

export default Landing