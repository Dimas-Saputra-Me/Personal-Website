import { motion } from "framer-motion";

const Hero = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: -250, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            id="home" className="hero min-h-screen max-sm:h-fit bg-base-200 snap-start">
            <div className="hero-content max-sm:flex-col lg:flex-row-reverse">
                <motion.img src={process.env.PUBLIC_URL + '/assets/dimas-saputra.jpeg'} variants={item} key={2} className="max-w-sm max-sm:w-64 mask mask-squircle shadow-2xl hover:scale-105 transition" alt="dimas-saputra-me" />
                <motion.div className="pr-10" variants={item} key={1}>

                    {/* Nama */}

                    <header className="group">
                        <h1 className="text-5xl max-sm:text-[2rem] font-bold">
                            Hi, I'm <br />
                            <span
                                className="text-purple-400 inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap will-change-transform"
                            >
                                Dimas-Saputra-ME
                            </span>
                            <span
                                className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
                            ></span>
                        </h1>
                    </header>

                    {/* Description */}

                    <p className="pt-2 pb-6 text-justify">Computer science student with expertise in software development. Learning web development, mobile development, and data science. Passionate about creating technological innovations to have a broad positive impact.</p>

                    <div className="flex space-x-4">
                        <button className="btn mt-5"><a href="https://github.com/Dimas-Saputra-Me" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="btn mt-5"><a href="https://www.linkedin.com/in/dimas-saputra-me/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero