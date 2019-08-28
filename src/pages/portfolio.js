import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PortfolioTeaser from '../components/portfolioTeaser/portfolioTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import SEO from '../components/seo';

const PortfolioListingPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { type: { eq: "portfolio" } } }
			) {
				edges {
					node {
						frontmatter {
							title
							lead
							date(formatString: "MMMM DD, YYYY")
							teaser_image {
								childImageSharp {
									fluid(quality: 100) {
										src
									}
								}
							}
						}
						id
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
				title="Portfolio"
				description="Below I've compiled a list of stuff that I have created over the years, professional and free-time
				projects."
			/>
			<Hero title="Portfolio">
				Here you’ll find a curated selection of my work over the years, including professional work and side
				projects.
			</Hero>
			<Container>
				<h2 className="h1 main-subheading">All portfolio showcases</h2>
				<Listing
					arrayOfContent={data.allMarkdownRemark.edges}
					listingComponent={PortfolioTeaser}
					listingClass="listing--col-3"
				/>
			</Container>
		</Layout>
	);
};

export default PortfolioListingPage;
