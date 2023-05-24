
const Project = ({ position, img, title, desc }) => {
    return (
        <div className="flex h-screen snap-start">
            {
                (position) ?
                    <>
                        <div className="flex-1 place-self-center m-12">
                            <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                        </div>
                        <div className="flex-1 place-self-center m-12 p-12">
                            <h1 className="text-5xl font-bold text-end">{title}</h1>
                            <p className="py-6 text-justify">{desc}</p>

                        </div>
                    </>
                    :
                    <>
                        <div className="flex-1 place-self-center m-12 p-12">
                            <h1 className="text-5xl font-bold text-start">{title}</h1>
                            <p className="py-6 pr-12 text-justify">{desc}</p>
                        </div>
                        <div className="flex-1 place-self-center m-12">
                            <img src={img} className="max-w-screen max-h-screen rounded-lg shadow-xl hover:scale-105 transition ease-in duration-300" alt="Project" />
                        </div>
                    </>
            }


        </div>
    )
}

export default Project