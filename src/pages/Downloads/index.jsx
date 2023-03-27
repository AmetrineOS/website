import "./index.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants } from "@catppuccin/palette";
import Modal from "react-modal";
import StaggeredParagraph from "../../components/StaggeredParagraph";

Modal.setAppElement("#root");

function PageDownloads() {
    const [images, setImages] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    if (images.length === 0)
        fetch("/ametrine/images.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("ISO list:", data);
                setImages(data);
            });

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="downloads-page"
        >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Download Modal"
                overlayClassName="download-modal-overlay"
                className="download-modal"
            >
                <h1>{modalData.title ? modalData.title : "null"}</h1>
                <h2>
                    SHA256 Sum: {modalData.sha256 ? modalData.sha256 : "null"}
                </h2>
                <button
                    onClick={() => {
                        window.open(modalData.url, "_blank");

                        closeModal();
                    }}
                >
                    DOWNLOAD
                </button>
                <button onClick={closeModal}>CLOSE</button>
            </Modal>
            <motion.div
                className="info"
                initial={{ top: "-100vh" }}
                animate={{ top: 0 }}
                transition={{ duration: 1 }}
            >
                <StaggeredParagraph delay={1.4} heading="Downloads">
                    Download AmetrineOS here!
                </StaggeredParagraph>
            </motion.div>
            <motion.div
                className="downloads-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
            >
                {images.map((image, i) => {
                    return (
                        <div className="file" key={i}>
                            <p>{image.title}</p>
                            <motion.div
                                whileHover={{
                                    color: variants.mocha.lavender.hex,
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                onTap={() => {
                                    // window.open(image.url, "_blank");
                                    setModalData(image);
                                    openModal();
                                }}
                                transition={{
                                    duration: 0.25
                                }}
                                tabIndex={i + 2}
                            >
                                <FontAwesomeIcon icon={faDownload} />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

export default PageDownloads;
