import * as React from "react";
import { graphql, PageProps, type HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Image from "../components/Image";

const PortfolioItemPage: React.FC<PageProps<Queries.PortfolioItemQuery>> = ({data}) => {
	const item = data.contentfulPortfolioItem;

	const image = item  
		? getImage(item.image)
		: null
	;

	return (
		<Layout>
			{item ? (
				<>
					<h1>{item.title}</h1>
					<div className="portfolio-item">
						<Image
							alt={item.image.description || item.title}
							gatsbyImageData={image}
						/>
						<div className="portfolio-item-text">
							{renderRichText(item.description)}
						</div>
					</div>
				</>
			) : (
				<span className="text-red-500">
					404: Missing portfolio item
				</span>
			)}		
		</Layout>
	);
};

export default PortfolioItemPage;

export const query = graphql`
query PortfolioItem($slug: String!) {
  contentfulPortfolioItem(slug: {eq: $slug}) {
    title
    slug
    image {
	  id
      description
      gatsbyImageData(
        layout: CONSTRAINED,
        width: 1200,
        placeholder: BLURRED
      )
    }
    description {
      raw
    }
  }
}`;

type HeadProps = {
	contentfulPortfolioItem: {
		title: string;
	}
}

export const Head: HeadFC<HeadProps> = (headProps) => (
	<title>{headProps.data.contentfulPortfolioItem.title}</title>
);
