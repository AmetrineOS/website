import "./index.scss";
import { motion } from "framer-motion";
import { faDownload, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { variants, labels } from "@catppuccin/palette";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let links = [
    {
        icon: faHome,
        to: "/"
    },
    {
        icon: faDownload,
        to: "/downloads"
    },
    {
        icon: faGithub,
        to: "/github"
    }
];

function Nav() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <nav>
                {links.map((link, i) => {
                    return (
                        <motion.div
                            whileHover={{
                                color: variants.mocha.lavender.hex,
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            onTap={() => {
                                navigate(link.to);
                            }}
                            transition={{
                                duration: 0.25
                            }}
                            key={i}
                            tabIndex={i}
                        >
                            <NavLink
                                activeclassname="active"
                                to={link.to}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                tabIndex={-1}
                            >
                                <FontAwesomeIcon icon={link.icon} />
                            </NavLink>
                        </motion.div>
                    );
                })}
            </nav>
        </div>
    );
}

export default Nav;
