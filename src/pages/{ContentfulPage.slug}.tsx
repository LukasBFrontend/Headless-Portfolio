import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import type { Block, Inline } from "@contentful/rich-text-types";
import type { EntryLinkBlock } from "@contentful/rich-text-types/dist/types/nodeTypes";
import type { Options, NodeRenderer } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import ImageLink from "../components/ImageLink";
import TechstackItem from "../components/TechstackItem";

type QueryBody = NonNullable<Queries.ContentfulPageBySlugQuery["contentfulPage"]>["body"]
type QueryReferences = NonNullable<QueryBody>["references"]
type Reference = NonNullable<NonNullable<QueryReferences>[number]>

const Page: React.FC<PageProps<Queries.ContentfulPageBySlugQuery>> = ({data}) => {
	const page = data.contentfulPage;
	const body = page?.body;
	
	const references: Reference[] = body?.references
		? Array
			.from(body.references)
			.filter(
				(ref): ref is Reference => ref !== null
			)
		: []
    ;

	const embeddedEntryRenderer: NodeRenderer = (node: Block | Inline): React.ReactNode => {
		if (node.nodeType !== BLOCKS.EMBEDDED_ENTRY) {
			return null;
		}

		const entryLinkNode = node as EntryLinkBlock;
		const entryId = entryLinkNode.data.target.sys.id;

		const entry = references.find((ref) => 
			ref.contentful_id === entryId || ref.id === entryId
		);

		if (!entry) {
			return null;
		}

		switch (entry.__typename) {
		case "ContentfulImageLink":
			return <ImageLink url={entry.url} image={entry.image} text={entry.text} />;
		case "ContentfulTechstackItem":
			return <TechstackItem title={entry.title} icon={entry.icon} />;
		default:
			return null;
		}
	};

	const options: Options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ENTRY]: embeddedEntryRenderer,
		},
	};

	return (
		<Layout>
			
				{body ? (
					renderRichText<Reference>(
						{ 
							raw: body.raw, 
							references
						}, 
						options
					)
				) : (
					<div className="text-red-500">
						404: Missing page content.
					</div>
				)}             
	
		</Layout>
	);
};

export default Page;

export const query = graphql`
query ContentfulPageBySlug($slug: String!) {
  contentfulPage(slug: {eq: $slug}) {
    title
    body {
      raw
      references {
        ... on ContentfulImageLink {
          id
          contentful_id
          __typename
          text
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 100, formats: [AUTO, WEBP])
          }
          url
        }
        ... on ContentfulTechstackItem {
          id
          contentful_id
          __typename
          icon {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 50, formats: [AUTO, WEBP])
            filename
            file {
              url
            }
          }
          title
        }
      }
    }
  }
}
`;

type HeadProps = {
	contentfulPage : {
		title: string;
	};
}

export const Head: HeadFC<HeadProps> = (headProps) => (
	<title>{headProps.data.contentfulPage.title}</title>
);