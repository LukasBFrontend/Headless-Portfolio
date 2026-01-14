import * as React from "react";
import type {IGatsbyImageData} from "gatsby-plugin-image";
import Image from "./Image";

type ImageLinkProps = {
    url: string;
    image: {
        gatsbyImageData : IGatsbyImageData | null;
    };
    text: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({url, image, text}) => {

	return (
		<a target="_blank" rel="noopener noreferrer" href={url} className="group image-link">
			<Image 
				alt={text}
				imgClassName="image invert"
				gatsbyImageData={image.gatsbyImageData}
			/>
			<div>
				<p>{text}</p> 
				<p>{url}</p>                          
			</div>
		</a>
	);
};

export default ImageLink;