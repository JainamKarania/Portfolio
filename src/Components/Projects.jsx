
import { useState } from 'react';
import Logo from '../assets/bg-banner.jpg'
export const Projects = () => {
    const projects = [
        {
          title: 'TheMoviesHub - TMH',
          description: 'Description of Project 1',
          image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
          liveLink: 'https://example.com/project1'
        },
        {
          title: 'Travel Agency Website',
          description: 'Description of Project 2',
          image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
          liveLink: 'https://example.com/project2'
        },
        {
            title: 'Travel Agency Website',
            description: 'Description of Project 2',
            image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
            liveLink: 'https://example.com/project2'
          },
          {
            title: 'Travel Agency Website',
            description: 'Description of Project 2',
            image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
            liveLink: 'https://example.com/project2'
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
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="mb-6">
        <button onClick={() => filterProjects('individual')} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">Individual Projects</button>
        <button onClick={() => filterProjects('academic')} className="bg-blue-500 text-white px-4 py-2 rounded-md">Academic Projects</button>
      </div>
      <div className="flex flex-wrap -mx-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-neutral-950 shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
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
