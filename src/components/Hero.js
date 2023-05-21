
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://wallpapercave.com/wp/wp8499826.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Title</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet arcu sodales hendrerit efficitur. Vivamus vel nisl in ligula efficitur luctus. Sed fermentum libero lectus, sed commodo justo molestie venenatis. Fusce lacinia eros vitae metus feugiat accumsan. Nunc nulla diam, mollis ac est ut, pulvinar dictum metus. Praesent nec varius erat. Sed viverra condimentum urna.</p>
                    <div className="mockup-code">
                        <pre data-prefix="$"><code>npm install HuTao</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
                        <pre data-prefix=">" className="bg-error text-error-content"><code>Error! Hu Tao Not Found!</code></pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero