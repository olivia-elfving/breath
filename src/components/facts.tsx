import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Facts() {
    const { count } = useSelector((state:any) => state.counter);
    console.log("count_facts", count);
    return (
        <>
            <Link to = {`/authenticated`}>Excersices</Link>
            <h1>Facts</h1>
            <details open={count === 0}> {/* default open ska vara kopplat till vilken nivå man är på i övningarna */}
                <summary>Easy</summary>
                <p>Presentation for a beginner. What would you say?</p>
            </details>
            <details open={count === 1}>
                <summary>Medium</summary>
                <p>More facts for a user at medium-level excersices</p>
            </details>
            <details open={count === 2}>
                <summary>Medium+</summary>
                <p>Even more facts for a user at medium-level excersices</p>
            </details>
            <details open={count >= 3 }>
                <summary>The perfect breath</summary>
                <p>Some information about the perfect breath. Links and way to find more information on your own</p>
            </details>
        </>
    ) 
}

export default Facts;