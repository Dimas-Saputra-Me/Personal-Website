import { motion } from "framer-motion";


const Experience = () => {
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
                {/* Education */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                    <h1 className="text-5xl font-bold my-16">Education</h1>
                    <ul className="steps steps-vertical">
                        <li className="step step-success">SD - ToBeWritten</li>
                        <li className="step step-success">SMP - ToBeWritten</li>
                        <li className="step step-success">SMA - ToBeWritten</li>
                        <li className="step ">University - ToBeWritten</li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Knowledge */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                    <h1 className="text-5xl font-bold my-16">Organization</h1>
                    <ul class="list-disc ms-10">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Organization*/}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                    <h1 className="text-5xl font-bold my-16">Community</h1>
                    <ul class="list-disc ms-10">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac.</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience