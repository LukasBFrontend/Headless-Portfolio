import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "./Navbar";

const Header = () => (
	<header className="header">
		<div className="profile">
			<h1>
                Lukas
			</h1>
			<StaticImage 
				src="../images/profile.png"
				alt="profile picture"
				width={200}
				height={200}
				imgClassName="image"
				className="image-wrapper rounded-full bg-blue-600 w-[100px]"
			/>
		</div>
		<Navbar />
	</header>
);

export default Header;