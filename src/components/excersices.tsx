const levels = [
    {
        name: 'beginner',
        inhale: 3000,
        exhale: 3000,
        duration: 60000
    },
    {
        name: 'medium',
        inhale: 4000,
        exhale: 4000,
        duration: 60000
    },
    {
        name: 'medium+',
        inhale: 4000,
        exhale: 4000,
        duration: 60000
    },
    {
        name: 'perfect breath',
        inhale: 5500,
        exhale: 5500,
        duration: 120000
    },
    {
        name: 'perfect breath+',
        inhale: 5500,
        exhale: 5500,
        duration: 180000
    },
    {
        name: 'perfect breath infinity',
        inhale: 5500,
        exhale: 5500,
        duration: 3600000
    }
]

function Excersices() {
    return (
        <>
            <h1>Excersices</h1>
            <div></div>
            <h2>{/*{levels.name}*/}Beginner</h2>
            <p className="breathTime">3s inhale/ 3s exhale</p>
            <p className="timer">1min</p>
            <div>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </>
    )
}
export default Excersices;