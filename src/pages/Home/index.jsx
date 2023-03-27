import "./index.scss";
import { motion } from "framer-motion";
import logo from "../../logo.svg";
import StaggeredParagraph from "../../components/StaggeredParagraph";

function PageHome() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="home-page"
        >
            <motion.div
                className="logo"
                initial={{ top: "-25vh" }}
                animate={{ top: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>AmetrineOS</h1>
                <img src={logo} alt="logo" draggable={false}></img>
            </motion.div>
            <motion.div className="info" initial={{left: "-100vw"}} animate={{left: 0}} transition={{duration: 1}}>
                <StaggeredParagraph delay={1.4} heading="What is AmetrineOS?">
                AmetrineOS is a custom, work in progress Arch Linux fork meant to give the feel of Arch Linux while being more accessible to newer users. This is very work in progress, and while we work on this, consider checking out <a href='https://endeavouros.com/'>EndeavourOS</a>.
                </StaggeredParagraph>
                <StaggeredParagraph delay={2.2} heading="How do I contribute?">
                    Click the github logo on the navigation bar to check out our github. Any help will be accepted on this project. Currently, beta testing is not needed as everything is in a very early stage. If you would like to help, email <a href="mailto:contact@endercass.me">Endercass</a> at contact@endercass.me.
                </StaggeredParagraph>
            </motion.div>
        </motion.div>
    );
}

export default PageHome;
