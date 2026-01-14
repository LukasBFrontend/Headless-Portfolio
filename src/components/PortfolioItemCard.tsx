import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Image from "./Image";
import * as React from "react";

type PortfolioItemCardProps = {
    title: string;
    slug: string;
    image: {
        gatsbyImageData: IGatsbyImageData | null
    }
    description: {
        raw: string;
    };
};

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({title, slug, image, description}) => {

    return (
        <Link to={`/portfolio/${slug}`}>
            <section className="portfolio-item-card">
                <h3>{title}</h3>
                <Image
                    alt={title}
                    gatsbyImageData={image.gatsbyImageData}
                />
                <p className="portfolio-item-text">
                    {renderRichText(description)}
                </p>
            </section>
        </Link>
    );
}

export default PortfolioItemCard;
