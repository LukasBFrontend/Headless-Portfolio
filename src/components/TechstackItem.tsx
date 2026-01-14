import * as React from "react";
import Image from "./Image";

type TechstackItemProps = {
    title: string;
    icon: {
        file: {
            url: string | null;
        } | null;
    };
};

const TechstackItem: React.FC<TechstackItemProps> = ({title, icon}) => {
	const imageUrl = icon.file?.url;
    
	return (
		<span className="techstack-item inline-block align-middle">
			<Image 
				alt={title} 
				src={imageUrl} 
				className="image"
			/> 
		</span>
	);
};

export default TechstackItem;