import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PortfolioPage: React.FC<PageProps> = ({data} : any) => {
    /* const data = useStaticQuery<Queries.PortfolioQuery>(graphql`
        query Portfolio {
            allContentfulPortfolioItem {
                nodes {
                    id
                    title
                    slug
                }
            }
        }
    `); */

    const items = data.allContentfulPortfolioItem.nodes;
    return (
        <Layout>
            <h1>Portfolio</h1>
            <ul>
                {items.map((item: any) => (
                    <li key={item.id}>
                        {item.title && (
                            <>
                                <Link to={`/portfolio/${item.slug || ""}`}>
                                    {item.title}
                                </Link>
                                <p>
                                    {renderRichText(item.description)}
                                </p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

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
`

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio Page</title>
