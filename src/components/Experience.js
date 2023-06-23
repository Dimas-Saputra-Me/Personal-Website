
const Experience = () => {
    return (
        <div className="h-screen snap-start">
            <div className="flex w-full h-full p-20">
                {/* Education */}
                    <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                        <h1 className="text-5xl font-bold my-16">Education</h1>
                        <ul className="steps steps-vertical">
                            <li className="step step-success">SD - ToBeWritten</li>
                            <li className="step step-success">SMP - ToBeWritten</li>
                            <li className="step step-success">SMA - ToBeWritten</li>
                            <li className="step ">University - ToBeWritten</li>
                        </ul>
                    </div>
                    <div className="divider divider-horizontal"></div>

                    {/* Knowledge */}
                    <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                        <h1 className="text-5xl font-bold my-16">Knowledge</h1>
                        
                    </div>
                    <div className="divider divider-horizontal"></div>

                    {/* Organization*/}
                    <div className="flex-1 card bg-base-200 rounded-box place-items-center">
                        <h1 className="text-5xl font-bold mt-16">Community</h1>
                        <h1 className="text-5xl font-bold">Organization</h1>
                    </div>
            </div>
        </div>
    )
}

export default Experience