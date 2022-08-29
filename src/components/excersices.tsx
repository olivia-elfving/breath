import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { toMinutes, toSeconds} from '../helpers/timeconverter';

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
        duration: 120000
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
        duration: 300000 /* 5 min. Se referens s.83. ca 60 andetag in och ut*/
    },
    {
        name: 'perfect breath infinity',
        inhale: 5500,
        exhale: 5500,
        duration: 3600000
    }
]

function Excersices() {
    const scrollRef = useRef(null);
    const { scrollIndex } = useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
    console.log(scrollIndex);

    return (
        <>
            <h1>Excersices</h1>
            <div className='excersises'>
                {levels.map (level => ( 
                    <div className='excersice'>
                        <div>Imaginär bild av cirkeln</div>
                        <h2>{level.name}</h2>
                        <p className="breathTime">{toSeconds(level.inhale)}s inhale/ {toSeconds(level.exhale)}s exhale</p>
                        <p className="timer">{toMinutes(level.duration)}min</p>
                    </div>
                ))}
            </div>    
            <div ref={scrollRef}>
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