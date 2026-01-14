import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PortfolioItemCard from "../components/PortfolioItemCard";

const PortfolioPage: React.FC<PageProps<Queries.PortfolioQuery>> = ({data}) => {
	const items = data.allContentfulPortfolioItem.nodes;
	return (
		<Layout>
			<h1>Results:{items.length}</h1>
			<div className="w-full">
				{items.map((item) => (
					<PortfolioItemCard
						key={item.id}
						title={item.title}
						slug={item.slug}
						image={item.image}
						description={item.description}
					/>
				))}
			</div>
		</Layout>
	);
};

export const query = graphql`
query Portfolio {
        allContentfulPortfolioItem {
            nodes {
                id
                title
                slug
                description {
                    raw
                }
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1200)
				}
            }
        }
    }
`;

export default PortfolioPage;

export const Head: HeadFC = () => <title>Portfolio Page</title>;
