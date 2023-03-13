import "./index.scss";
import { motion } from "framer-motion";
import logo from "../../logo.svg";

function PageHome() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="home-page"
        >
            <motion.img
                src={logo}
                alt="logo"
                className="logo"
                initial={{ top: -100 }}
                animate={{ top: 100 }}
                transition={{ duration: 1 }}
            />
        </motion.div>
    );
}

export default PageHome;
