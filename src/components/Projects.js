
const Project = ({ position, img, title, desc, url }) => {
    return (
        <div id="project" className="flex h-screen max-sm:h-fit max-sm:flex-col snap-start">
            {
                (position) ?
                    <>
                        <div className="flex-1 place-self-center m-12 max-sm:m-7">
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                            </a>
                        </div>
                        <div className="flex-1 place-self-center m-12 p-12 max-sm:m-6 max-sm:p-0">
                            <a href={url} target="_blank" rel="noreferrer"><h1 className="text-5xl font-bold text-end">{title}</h1></a>
                            <p className="py-6 text-justify">{desc} You can click the Image or Title to view the project repository.</p>

                        </div>
                    </>
                    :
                    <>
                        <div className="flex-1 place-self-center m-12 p-12 max-sm:m-6 max-sm:p-0">
                            <a href={url} target="_blank" rel="noreferrer"><h1 className="text-5xl font-bold text-start">{title}</h1></a>
                            <p className="py-6 pr-12 max-sm:pr-0 text-justify">{desc} You can click the Image or Title to view the project repository.</p>
                        </div>
                        <div className="flex-1 place-self-center m-12 max-sm:m-7">
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                            </a>
                        </div>
                    </>
            }
            <div className="divider"></div>
        </div>
    )
}

export default Project