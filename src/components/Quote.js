
const Quote = () => {

    return (
        <div className="flex h-1/2 snap-start max-sm:p-5">
            <div className="mockup-code m-auto mt-0">
                <pre data-prefix="$"><code>npm install quote</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing ...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                <pre data-prefix="$" ><code>quote get</code></pre>
                <pre data-prefix=">" ><code>“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”</code></pre>
            </div>
        </div>
    )
}

export default Quote