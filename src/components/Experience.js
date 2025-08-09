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
                        <li className="step step-success">Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka - Machine Learning</li>
                        <li className="step step-success">University of Pembangunan Nasional “Veteran” Jawa Timur</li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Organization & Community */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center px-5">
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold mt-8 max-sm:mt-8">Organization</h1>
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold mb-8 max-sm:mb-8">Community</h1>
                    <ul className="list-disc ms-10 max-sm:ms-5 max-sm:px-7 max-sm:pb-7">
                        <li>
                            <p className="font-extrabold">Head of Express.js Curriculum</p>
                            <p className="font-bold"> Informatics Learning Club</p>
                            <p>Conducted weekly sessions on JavaScript, Node.js, Express.js, and backend, with exercises, reviews, and track development.</p>
                        </li>
                        <br></br>
                        <li>
                            <p className="font-extrabold">Head of R&D, Head of Division 2</p>
                            <p className="font-bold">Informatics Association of Smansa - Sumenep</p>
                            <p>Led website development, managed sub-units, and conducted evaluations to improve organization activities.</p>
                        </li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>

                {/* Work Experience */}
                <div className="flex-1 card bg-base-200 rounded-box place-items-center px-5">
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold mt-8 max-sm:mt-8">Work</h1>
                    <h1 className="text-5xl max-sm:text-[2rem] font-bold mb-8 max-sm:mb-8">Experience</h1>
                    <ul className="show-scrollbar list-disc list-outside pl-5 mb-5 overflow-y-scroll max-sm:pl-5">
                        <li>
                            <p className="font-extrabold">Fullstack Web Developer (Intern)</p>
                            <p className="font-bold"> ADS Digital Partner</p>
                            <p>
                                <ul>
                                    <li> Developed a full-stack florist ordering website using Laravel.</li>
                                    <li> Integrated PayPal as the primary payment gateway.</li>
                                    <li>  Collaborated on backend logic, order flow, and customer experience improvements.</li>
                                </ul>
                            </p>
                        </li>
                        <br></br>
                        <li>
                            <p className="font-extrabold">Freelance</p>
                            <p className="font-bold">Upwork</p>
                            <p>
                                <ul>
                                    <li>Worked with clients on AI automation and web scraping projects. (currently have done two projects with one clients)</li>
                                    <li>Delivered custom solutions for data collection, automation scripts, and API integration.</li>
                                    <li> Payment based on project scope and client agreements.</li>
                                </ul>
                            </p>
                        </li>
                        <br></br>
                        <li>
                            <p className="font-extrabold">Data Annotator</p>
                            <p className="font-bold">DataAnnotation.tech</p>
                            <p>
                                <ul>
                                    <li>Contributed to three annotation projects involving image, text, and code evaluations.</li>
                                    <li>Reviewed and corrected AI-generated responses for quality assurance.</li>
                                    <li>Paid hourly ($10-$40) based on project availability and complexity.</li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience