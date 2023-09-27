import { motion } from "framer-motion";


const Experience = () => {
    return (
        <motion.div
            id="aboutme"
            initial={{ x: 1000 }}
            animate={{ scale: 1, x: 0 }}
            transition={{
                duration: 3,
                stiffness: 260,
                damping: 20
            }}
            className="h-screen max-sm:h-fit snap-start">
            <div className="flex max-sm:flex-col gap-3 w-full h-full p-20 max-sm:p-5">
                {/* Education */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center px-5">
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold my-16 max-sm:my-8">Education</h1>
                    <ul className="steps steps-vertical max-sm:px-7 max-sm:pb-7 ">
                        <li className="step step-success">High School - State Senior High School 1 Sumenep</li>
                        <li className="step">University - East Java "Veteran" National Development University</li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Knowledge */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center px-5">
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold my-16 max-sm:my-8">Organization</h1>
                    <ul className="list-disc ms-10 max-sm:ms-5 max-sm:px-7 max-sm:pb-7">
                        <li>
                            <p className="font-bold">Research and development member </p>
                            State High School Informatics Association 1 Sumenep
                        </li>
                        <li>
                            <p className="font-bold">Head of division 2 </p>
                            State High School Informatics Association 1 Sumenep
                        </li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Organization*/}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center px-5">
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold my-16 max-sm:my-8">Community</h1>
                    <ul class="list-disc ms-10 max-sm:ms-5 max-sm:px-7 max-sm:pb-7">
                        <li>Google Developer Student Clubs - Bandung Institute of Technology</li>
                        <li>Google Developer Student Clubs - East Java "Veteran" National Development University</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience