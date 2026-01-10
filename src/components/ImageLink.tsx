import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type {IGatsbyImageData} from "gatsby-plugin-image";

type ImageLinkProps = {
    url: string | null;
    image: {
        gatsbyImageData : IGatsbyImageData | null;
    } 
    | null;
    text: string | null;
}

const ImageLink: React.FC<ImageLinkProps> = ({url, image, text}) => {
	const fetchedImage = image 
		? getImage(image.gatsbyImageData) 
		: null
    ;

	return (
		<a target="_blank" rel="noopener noreferrer" href={url || "/"} className="group image-link">
			{ url && fetchedImage ?
				<>
					<GatsbyImage 
						image={fetchedImage} 
						alt={text || url}
						imgClassName="image invert"
					/>
					<div>
						{text &&
                            <p>{text}</p>
						} 
						<p>{url}</p>                          
					</div>
				</> :
				<>
					<img className="missing-image" src="" alt="missing image" />
					<div>
						<p className="text-red-500">Image Link could not be fetched</p>
					</div>
				</>
			}
            
		</a>
	);
};

export default ImageLink;