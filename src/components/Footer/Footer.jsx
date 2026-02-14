import "./Footer.scss"
import logo from "./LOGO_footer.svg"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer