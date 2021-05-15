import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../client';
import './index.sass';

export const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio
        }`
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);

  if (!aboutData) {
    return <div className='loader'>Loading ...</div>;
  }

  return (
    <div className={`about ${aboutData && 'active'}`}>
      <h1 className='about-title'>Hello, my name is {aboutData.name}</h1>
      <div className='about-descr'>
        <BlockContent blocks={aboutData.bio} />
      </div>
      <div className='about-descr'>
        Feel free to take a look at my latest projects on the{' '}
        <NavLink exact to='/projects'>
          {' '}
          web portfolio page.
        </NavLink>
      </div>
    </div>
  );
};
