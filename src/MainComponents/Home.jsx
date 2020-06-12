import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import { Link } from 'react-router-dom';
import Routes from './Routes';

function Home() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
