import * as React from "react"
import { Link } from "gatsby"
import { container } from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={container}>
        <header>
            <h1>
                Header title
            </h1>
        </header>
        <StaticImage src="../images/icon.png" alt="Gatsby Astronaut" />
        {
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/something">404</Link>
                    </li>
                </ul>
            </nav>
        }
        <main>{children}</main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default Layout
