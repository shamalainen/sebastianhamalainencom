import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogLiftupListing from '../components/blogLiftupListing/blogLiftupListing';
import PortfolioLiftupListing from '../components/portfolioListingLiftup/portfolioListingLiftup';
import Introduction from '../components/introduction/introduction';
import Separator from '../components/separator/separator';

import '../scss/base.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Developer, Web Design and JS enthusiast" />
    <Introduction />
    <PortfolioLiftupListing />
    <Separator />
    <BlogLiftupListing />
  </Layout>
);

export default IndexPage;
