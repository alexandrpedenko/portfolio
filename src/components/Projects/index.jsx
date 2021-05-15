import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import ProjectLi from '../ProjectLi/index';
import './style.sass';

export const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      gitlink,
      demolink,
      tags,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) {
    return <div className='loader'>Loading ...</div>;
  }

  return (
    <div className={`projects ${projectData && 'active'}`}>
      <h1 className='projects__title'>Web Developer Portfolio</h1>
      <p className='projects__description'>
        My study projects as a front-end developer.
      </p>
      <ul className='projects__list'>
        {projectData.map((project) => (
          <ProjectLi project={project} key={project.slug.current} />
        ))}
      </ul>
    </div>
  );
};
