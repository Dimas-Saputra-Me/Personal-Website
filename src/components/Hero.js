const Hero = () => {
    return (
        <div id="home" className="hero min-h-screen bg-base-200 snap-start">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={process.env.PUBLIC_URL + '/assets/dimas_saputra.jpeg'} className="max-w-sm rounded-lg shadow-2xl hover:scale-105 transition" alt="dimas-saputra-me" />
                    <div className="pr-10">

                        {/* Nama */}

                        <header className="group">
                            <h1 className="text-5xl font-bold">
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

                        <p className="pt-2 pb-6 text-justify">Seorang mahasiswa Informatika dengan keahlian dalam pengembangan perangkat lunak. Menguasai front-end, back-end, dan mobile development. Bersemangat menciptakan inovasi teknologi untuk memberi dampak positif yang luas.</p>

                        <div className="mockup-code">
                            <pre data-prefix="$"><code>npm install happiness</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        </div>

                        <div className="flex space-x-4">
                            <button className="btn mt-5"><a href="https://github.com/Dimas-Saputra-Me" target="_blank" rel="noopener noreferrer">Github</a></button>
                            <button className="btn mt-5"><a href="https://www.linkedin.com/in/dimas-saputra-me/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                        </div>


                    </div>
                </div>
        </div>
    )
}

export default Hero