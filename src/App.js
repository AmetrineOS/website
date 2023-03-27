import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, redirect } from "react-router-dom";
import Layout from "./layout";
import PageDownloads from "./pages/Downloads";
import PageHome from "./pages/Home";
import { variants } from "@catppuccin/palette";

function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Particles
                id="particles"
                options={{
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: variants.mocha.text.hex
                        },
                        links: {
                            color: variants.mocha.text.hex,
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 2
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 60
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: 4
                        }
                    },
                    detectRetina: true
                }}
                init={particlesInit}
            />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/ametrine/" element={<Layout />}>
                        <Route index element={<PageHome />} />
                        <Route path="downloads" element={<PageDownloads />} />
                        <Route
                            path="github"
                            Component={() => {
                                window.location.replace(
                                    "https://github.com/AmetrineOS"
                                );
                                return null;
                            }}
                        />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
