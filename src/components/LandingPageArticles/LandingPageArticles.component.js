import React from 'react';
import LeftAside from '../LeftAside/LeftAside.component';
import RightAside from '../RightAside/RightAside.component';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle.component';
import './LandingPageArticles.styles.scss';

const LandingPageArticles = () => (
  <section className='landing-page-articles container'>
    <LeftAside />
    <FeaturedArticle />
    <RightAside />
  </section>
);

export default LandingPageArticles;
