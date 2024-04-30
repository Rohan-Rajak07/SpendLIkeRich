import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="company">
            <img src="money.png" alt="logo" />
            <p>© 2024 Company, Inc</p>

        </div>
        <div className="social">
            <a href="https://github.com/Rohan-Rajak07"><p className="git"><IoLogoGithub/></p></a>
            <a href="https://instagram.com/rohxn_rajak/"><p className="insta"><FaInstagram/></p></a>
        </div>

    </footer>
  )
}

export default Footer