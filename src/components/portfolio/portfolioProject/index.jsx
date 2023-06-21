/* eslint-disable react/prop-types */
import './styles.css';

export function PortfolioProject({project}) {
return (
  <div className='wrapper' key={project.key}>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
  <img id='projectImage' src={project.image}alt="project's screenshot" width={200} />
  <h3>{project.title}</h3>
  </a>
  <p>{project.description}</p>
   <div id='technologies'>
    {project.technologies.map((tech, index ) =>(

<span key={index}>{tech}</span>
    ))}
  </div>
</div>
)
}