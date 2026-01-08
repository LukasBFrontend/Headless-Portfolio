import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Page: React.FC<PageProps> = ({data} : any) => {
    const page = data.contentfulPage;

    return (
        <Layout>
            <h1>{page.title}</h1>
            { page.body && 
                <div>
                    {renderRichText(page.body)}
                </div>                
            }
        </Layout>
    )
}

export default Page;

export const query = graphql`
query ($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
        title
        slug
        body {
            raw
        }
    }
}
`

export const Head: HeadFC = ({data} : any) => <title>{data.contentfulPage}</title>