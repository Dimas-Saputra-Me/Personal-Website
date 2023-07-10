
const Quote = () => {

    return (
        <div className="flex h-1/2 snap-start">
            <div className="mockup-code m-auto mt-0">
                <pre data-prefix="$"><code>npm install quote</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing ...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                <pre data-prefix="$" ><code>quote get</code></pre>
                <pre data-prefix=">" ><code>QUOTE HERE</code></pre>
            </div>
        </div>
    )
}

export default Quote