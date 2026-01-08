import * as React from "react"
import { graphql, type HeadFC } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

type PortfolioItemProps = {
  data: {
    contentfulPortfolioItem : any
  }
}

const PortfolioItemPage: React.FC<PortfolioItemProps> = ({data}) => {
    const item = data.contentfulPortfolioItem
    const image = getImage(item.image);

    return (
    <Layout>
        <h1>{item.title}</h1>
        <p>Slug: {item.slug}</p>
        {image && (
          <GatsbyImage 
            image={image} 
            alt={item.image.description || item.title} 
            imgClassName="portfolio-image-img"
          />
        )}
        {item.description &&(
          <div>{renderRichText(item.description)}</div>
        )}
    </Layout>
    )
}

export default PortfolioItemPage

export const query = graphql`
query ($slug: String!) {
  contentfulPortfolioItem(slug: {eq: $slug}) {
    title
    slug
    image {
      description
      gatsbyImageData(
        layout: CONSTRAINED,
        width: 800,
        placeholder: BLURRED
      )
    }
    description {
      raw
    }
  }
}`

export const Head: HeadFC = ({data} : any) => (
    <title>{data.contentfulPortfolioItem}</title>
)
