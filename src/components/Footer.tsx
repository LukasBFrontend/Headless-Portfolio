import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Footer = () => (
	<footer className="footer">
			<div className="profile">
		<p>
			Lukas Bråkenhielm
			<br />
			072-152 67 57
			<br />
			brakenhielmlukas@gmail.com
		</p>
		<StaticImage 
			src="../images/profile.png"
			alt="profile picture"
			width={200}
			height={200}
			imgClassName="image"
			className="image-wrapper rounded-full! bg-blue-600 w-[100px]"
		/>
		</div>
	</footer>
);

export default Footer;