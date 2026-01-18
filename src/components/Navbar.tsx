import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";

const links = [
	{text: "Portfolio", url: "/portfolio"}, 
	{text: "Contact", url: "/contact"},
	{text: "About Me", url: "/about-me"}, 
];

const Navbar: React.FC = () => {
	const location = useLocation();

	const renderProfileLink = (text: string) => {
	
		return (
			<div className="profile-link">
				<StaticImage 
					src="../images/profile.png"
					alt="profile picture"
					width={200}
					height={200}
					imgClassName="image"
					className="image-wrapper rounded-full! bg-blue-600 w-[100px] hidden!"
				/>
				<span className="profile-link-text">{text}</span>
			</div>
		);
	};

	return (
		<nav className="navbar">
			<ul>
				{links.map(link=> 
					(
						<li key={link.text}>
							<Link 
								to={link.url}
								className={`relative inline-block pb-1 no-underline transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${location.pathname == link.url + "/" ? "after:w-full" : ""}`}
							>
								{ link.url != "/about-me"
									? link.text
									: renderProfileLink(link.text)
								}
							</Link>
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
