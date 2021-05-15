import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../client';
import './style.sass';

export const SingleProject = () => {
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          gitlink,
          demolink,
          body,
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
      .then((data) => setProjectData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!projectData) {
    return <div className='loader'>Loading ...</div>;
  }

  return (
    <main className={`single-project ${projectData && 'active'}`}>
      <div className='single-project__name'>{projectData.title}</div>
      <div className='single-project__image'>
        <img
          src={projectData.mainImage.asset.url}
          alt={projectData.mainImage}
        />
      </div>
      <div className='single-project__descr'>
        <div className='single-project__descr-body'>
          <BlockContent blocks={projectData.body} />
        </div>
      </div>

      <div className='single-project__buttons'>
        <a
          href={projectData.gitlink}
          className='btn btn-git'
          target='_blank'
          rel='noreferrer'
        >
          view on Github
        </a>
        <a
          href={projectData.demolink}
          className='btn btn-main'
          target='_blank'
          rel='noreferrer'
        >
          view demo
        </a>
      </div>
    </main>
  );
};
