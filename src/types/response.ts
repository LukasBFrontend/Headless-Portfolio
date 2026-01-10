import type { ImageDataLike } from "gatsby-plugin-image";

export type ContentfulImageLink = {
    __typename: "ContentfulImageLink";
    id: string;
    contentful_id: string;
    text: string;
    image: {
        gatsbyImageData: ImageDataLike;
    };
    url: string;
};

export type ContentfulTechstackItem = {
    __typename: "ContentfulTechstackItem";
    id: string;
    contentful_id: string;
    icon: {
        gatsbyImageData: ImageDataLike;
        filename: string;
        file: {
            url: string;
        };
    };
    title: string;
};

export type ContentfulPortfolioItem = {
    id: string;
    title: string;
    slug: string;
    description: {
        raw: string;
    }
}