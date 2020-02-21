import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar.component';
import LandingPageGallery from '../LandingPageGallery/LandingPageGallery.component';
import LandingPageArticles from '../LandingPageArticles/LandingPageArticles.component';

import './LandingPage.styles.scss';

const LandingPage = () => (
  <Fragment>
    <Navbar />
    <LandingPageGallery />
    <LandingPageArticles />
    <footer className="footer">
      <p className='copyright'>Copyright &copy; SageAuthors</p>
      <p className='credit'>Designed and coded by David Essien</p>
    </footer>
  </Fragment>
);

export default LandingPage;
