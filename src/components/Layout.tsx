import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
	return (
		<div>
			<Header/>
			<main className="px-32 py-6 flex flex-col justify-center items-center gap-10">
				<article className="contentful-page">
					{children}
				</article>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
