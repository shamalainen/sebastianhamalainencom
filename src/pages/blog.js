import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import BlogTeaser from '../components/blogTeaser/blogTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import Heading from '../components/heading/heading';
import SEO from '../components/seo';

const BlogListingPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "//content/blog//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
  `);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Blog">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Here I'll dabble into different kind of topics, but most likely relating to tech and web development.
      </Hero>
      <Container>
        <Heading>All blog posts</Heading>
        <Listing arrayOfContent={data.allMdx.edges} listingComponent={BlogTeaser} listingClass="listing--col-2" />
      </Container>
    </Layout>
  );
};

export default BlogListingPage;
