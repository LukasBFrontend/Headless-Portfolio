import { resolve } from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql<{
		allContentfulPortfolioItem: {
			nodes: Array<{
				slug: string;
			}>;
		};
	}>(`
    query CreatePortfolioPages {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }`);

	if (result.errors) {
		console.error(result.errors);

		throw result.errors;
	}

	const items = result.data?.allContentfulPortfolioItem.nodes ?? [];

	items.forEach((item) => {
		createPage({
			path: `/portfolio/${item.slug}`,
			component: resolve("./src/templates/portfolio-item.tsx"),
			context: {
				slug: item.slug,
			},
		});
	});
};

interface FieldExtensionResolverContext {
	nodeModel: {
		getNodeById: (args: { id: string }) => unknown;
	};
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
	actions,
}) => {
	const { createTypes, createFieldExtension } = actions;

	createFieldExtension({
		name: "requiredAsset",
		extend: () => ({
			resolve: (
				source: Record<string, unknown>,
				args: Record<string, unknown>,
				context: FieldExtensionResolverContext
			) => {
				// Check for common asset field names: image, icon, etc.
				const assetField = source.image___NODE || source.icon___NODE || 
					source.image || source.icon;
				
				if (!assetField) {
					throw new Error("Required asset field is missing");
				}
				
				const value = context.nodeModel.getNodeById({
					id: assetField as string,
				});
				
				if (!value) {
					throw new Error("Required asset field is missing");
				}
				
				return value;
			},
		}),
	});
  
	createTypes(`
	  type ContentfulRichText {
		raw: String!
	  }

	  type ContentfulPortfolioItem implements Node {
		title: String!
		slug: String!
		description: ContentfulRichText!
		image: ContentfulAsset! @requiredAsset
	  }
	  type ContentfulImageLink implements Node {
		text: String!
		url: String!
		image: ContentfulAsset! @requiredAsset
	  }
	  type ContentfulTechstackItem implements Node {
	    title: String!
		icon: ContentfulAsset! @requiredAsset
	  }
	`);
};

