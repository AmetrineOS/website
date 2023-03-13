import { AnimatePresence } from "framer-motion";
import { Routes, Route, redirect } from "react-router-dom";
import Layout from "./layout";
import PageDownloads from "./pages/Downloads";
import PageHome from "./pages/Home";

function App() {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageHome />} />
                    <Route path="/downloads" element={<PageDownloads />} />
                    <Route
                        path="/github"
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
    );
}

export default App;
