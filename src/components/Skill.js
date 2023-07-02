import { motion } from "framer-motion";

const Skill = () => {
    return (
        <motion.div
            initial={{ x: 1000 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
                duration: 3,
                stiffness: 260,
                damping: 20
            }}
            className="h-screen snap-start">
            <div className="flex w-full h-full p-20">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid flex-1 card bg-base-300 rounded-box place-items-center">content</div>
                    <div className="divider"></div>
                    <div className="grid flex-1 card bg-base-300 rounded-box place-items-center">content</div>
                    <div className="divider"></div>
                    <div className="grid flex-1 card bg-base-300 rounded-box place-items-center">content</div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill