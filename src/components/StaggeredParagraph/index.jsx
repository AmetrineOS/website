import "./index.scss";
import { delay, motion } from "framer-motion";

function StaggeredParagraph(props) {
    if (typeof props.delay == "number") {
        return (
            <>
                {props.heading && (
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: props.delay }}
                    >
                        {props.heading}
                    </motion.h1>
                )}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        delay:
                            (props.heading ? props.delay + 0.4 : props.delay)
                    }}
                >
                    {props.children}
                </motion.p>
            </>
        );
    }
    return;
}

export default StaggeredParagraph;
