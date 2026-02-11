import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import "../styles/Layout.scss"

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="layout_main">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout