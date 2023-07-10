
const Project = ({ position, img, title, desc }) => {
    return (
        <div id="project" className="flex h-screen max-sm:h-fit max-sm:flex-col snap-start">
            {
                (position) ?
                    <>
                        <div className="flex-1 place-self-center m-12 max-sm:m-7">
                            <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                        </div>
                        <div className="flex-1 place-self-center m-12 p-12 max-sm:m-6 max-sm:p-0">
                            <h1 className="text-5xl font-bold text-end">{title}</h1>
                            <p className="py-6 text-justify">{desc}</p>

                        </div>
                    </>
                    :
                    <>
                        <div className="flex-1 place-self-center m-12 p-12 max-sm:m-6 max-sm:p-0">
                            <h1 className="text-5xl font-bold text-start">{title}</h1>
                            <p className="py-6 pr-12 max-sm:pr-0 text-justify">{desc}</p>
                        </div>
                        <div className="flex-1 place-self-center m-12 max-sm:m-7">
                            <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                        </div>
                    </>
            }
            <div className="divider"></div>
        </div>
    )
}

export default Project