function Facts() {
    return (
        <>
            <h1>Facts</h1>
            <details open> {/* default open ska vara kopplat till vilken nivå man är på i övningarna */}
                <summary>Easy</summary>
                <p>Presentation for a beginner. What would you say?</p>
            </details>
            <details>
                <summary>Medium</summary>
                <p>More facts for a user at medium-level excersices</p>
            </details>
            <details>
                <summary>Medium+</summary>
                <p>Even more facts for a user at medium-level excersices</p>
            </details>
            <details>
                <summary>The perfect breath</summary>
                <p>Some information about the perfect breath. Links and way to find more information on your own</p>
            </details>
        </>
    ) 
}

export default Facts;