import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const PortfolioPage: React.FC<PageProps<Queries.PortfolioQuery>> = ({data}) => {
	const items = data.allContentfulPortfolioItem.nodes;
	return (
		<Layout>
			<h1>Portfolio</h1>
			<ul className="w-full">
				{items.map((item) => (
					<li key={item.id}>
						{item.title && (
							<>
								<Link to={`/portfolio/${item.slug || "/"}`}>
									{item.title}
								</Link>
								{item.description && (
									<p>
										{renderRichText(item.description)}
									</p>
								)}
							</>
						)}
					</li>
				))}
			</ul>
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
            }
        }
    }
`;

export default PortfolioPage;

export const Head: HeadFC = () => <title>Portfolio Page</title>;
