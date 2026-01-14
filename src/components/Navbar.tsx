import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const links = [
	{text: "Portfolio", url: "/portfolio"}, 
	{text: "About Me", url: "/about-me"}, 
	{text: "Contact", url: "/contact"}
];

const Navbar: React.FC = () => {
	const location = useLocation();

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
								{link.text}
							</Link>
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
