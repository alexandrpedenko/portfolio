import { Link } from 'react-router-dom';
import './style.sass';

const ProjectLi = ({ project }) => {
  return (
    <li className='projects__item'>
      <div className='projects__item-wrap'>
        <div className='projects__item-image'>
          <img src={project.mainImage.asset.url} alt={project.mainImage} />
          <div className='projects__item-buttons'>
            <a
              href={project.gitlink}
              className='btn btn-git'
              target='_blank'
              rel='noreferrer'
            >
              view on Github
            </a>
            <Link
              to={`/project/${project.slug.current}`}
              className='btn btn-main'
            >
              read more
            </Link>
          </div>
        </div>
        <div className='projects__item-descript'>
          <div className='projects__item-name'>{project.title}</div>
          <div className='projects__item-tech'>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectLi;
