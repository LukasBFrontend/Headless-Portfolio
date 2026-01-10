import * as React from "react";

type TechstackItemProps = {
    title: string | null;
    icon: {
        file: {
            url: string | null;
        } | null;
    } | null;
};

const TechstackItem: React.FC<TechstackItemProps> = ({title, icon}) => {
	const imageUrl = icon?.file?.url;
    
	return (
		<span className="techstack-item inline-block align-middle">
			{ title && imageUrl ?
				<img 
					src={imageUrl}
					alt={title}
					className="image"
				/> :
				<img 
					alt="missing image" 
					className="placeholder-image"
				/>
			}
                
		</span>
	);
};

export default TechstackItem;