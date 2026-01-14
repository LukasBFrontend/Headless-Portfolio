import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type ImageProps = {
    gatsbyImageData?: IGatsbyImageData | null;
    src?: string | null;
    alt: string;
    imgClassName?: string;
    className?: string;
};

const Image: React.FC<ImageProps> = ({
    gatsbyImageData,
    src: url,
    alt,
    imgClassName,
    className,
}) => {
    const wrapperClassNames = `image-wrapper ${className}`;
    const imageClassNames = `image ${imgClassName}`;

    if (gatsbyImageData) {
        const image = getImage(gatsbyImageData);
        
        if (image) {
            return (
                <GatsbyImage
                    image={image}
                    alt={alt}
                    className={wrapperClassNames}
                    imgClassName={imageClassNames}
                />
            );
        }
    }

    if (url) {
        return (
            <div className={wrapperClassNames}>
                <img
                    src={url}
                    alt={alt}
                    className={imageClassNames}
                />
            </div>
        );
    }

    return (
        <img
            alt={alt}
            className={className}
        />
    );
};

export default Image;