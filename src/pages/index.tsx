import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>
      			Welcome!
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto ipsam alias porro, eaque corrupti! Nulla, voluptates aspernatur rem distinctio ea quis praesentium vitae odio excepturi omnis libero dolorum sit!
				Quidem hic reiciendis id tempore placeat reprehenderit esse, possimus nulla labore obcaecati facilis quam alias adipisci eius assumenda debitis doloremque culpa iusto necessitatibus dolores, sunt saepe ex. Officia, ullam cum.
				Fugit quasi aliquam dolore necessitatibus vitae architecto minus unde deserunt nulla, consequuntur veniam quae soluta, libero sequi delectus aliquid laboriosam ducimus assumenda atque, saepe amet accusamus quisquam! Quos, veniam nisi.
				Inventore blanditiis recusandae, minus voluptas repellat tempora voluptatibus itaque vel repellendus facilis nam quia rerum eligendi pariatur aliquam veritatis numquam quibusdam odio accusamus mollitia, deserunt sint! Iure suscipit dolorum excepturi?
				Delectus hic ipsa voluptate doloremque sunt praesentium pariatur animi, magni vero provident modi! Aliquid ducimus nemo consectetur, optio illo, repellendus ratione corporis placeat tenetur rem voluptates consequuntur non totam vel.
			</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Lukas Portfolio - Home</title>;
