
import { useState } from 'react';
import Logo from '../assets/bg-banner.jpg'
export const Projects = () => {
    const projects = [
        {
          title: 'TheMoviesHub - TMH',
          description: 'Description of Project 1',
          skill1 : "React",
          skill2 : "Redux",
          skill3 : "Firebase",
          skill4 : "Tailwind",
          image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
          liveLink: 'https://example.com/project1',
          category : "individual"
        },
        {
          title: 'Travel Agency Website',
          description: 'Description of Project 2',
          skill1 : "React",
          skill2 : "Redux",
          skill3 : "Firebase",
          skill4 : "Tailwind",
          image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
          liveLink: 'https://example.com/project2',
          category : "academic"
        },
        {
            title: 'Music Application',
            description: 'Description of Project 2',
            skill1 : "React",
            skill2 : "Redux",
            skill3 : "Firebase",
            skill4 : "Tailwind",
            image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
            liveLink: 'https://example.com/project2',
            category : "academic"
          },
          {
            title: 'ZebraLearn - Trading Website',
            description: 'Description of Project 2',
            skill1 : "Webflow",
            skill2 : "Javascript",
            skill3 : "",
            skill4 : "",
            image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
            liveLink: 'https://example.com/project2',
            category : "individual"
          },
      ];
    const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (category) => {
    if (category === 'individual') {
      const individualProjects = projects.filter(project => project.category === 'individual');
      setFilteredProjects(individualProjects);
    } else if (category === 'academic') {
      const academicProjects = projects.filter(project => project.category === 'academic');
      setFilteredProjects(academicProjects);
    }
}    
  return (
    <div>
        <section className="py-20" id='projects'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-2 justify-center mb-6">
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      <div className="mb-6">
        <button onClick={() => filterProjects('individual')} className="bg-white text-xs text-black px-4 py-2 rounded-md mr-4">Individual Projects</button>
        <button onClick={() => filterProjects('academic')} className="bg-white text-xs text-black px-4 py-2 rounded-md">Academic Projects</button>
      </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-neutral-950 shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-4">
                <p className="color-aqua mb-4">{project.skill1}</p>
                <p className="color-orange mb-4">{project.skill2}</p>
                <p className="color-orange mb-4">{project.skill3}</p>
                <p className="color-seablue mb-4">{project.skill4}</p>
                </div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600">View Live Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>
    </div>
  )
}
