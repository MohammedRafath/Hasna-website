import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

interface LoaderProps {
    isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="uiverse-page"
                >
                    <div className="uiverse-container">
                        <div className="uiverse-ring"></div>
                        <div className="uiverse-ring"></div>
                        <div className="uiverse-ring"></div>
                        <div className="uiverse-ring"></div>
                        <div className="uiverse-h3">loading</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence >
    );
};
