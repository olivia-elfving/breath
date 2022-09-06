import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countAction } from '../redux/counter';
import { toMinutes, toSeconds } from '../helpers/timeconverter';
import { Link } from 'react-router-dom';

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
    const myRef = useRef<null | HTMLDivElement>(null);
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        scrollTo();
    });

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const currentExcersise = e.currentTarget.scrollLeft;
        const totalExcersiseSize = e.currentTarget.scrollWidth;
        const newIndex = (currentExcersise/totalExcersiseSize)*levels.length;
        if (Number.isInteger(newIndex)) {
            dispatch(countAction(newIndex));
        }
    };

    const scrollTo = () => {
        if (myRef && myRef.current) {  
            myRef.current.scrollIntoView();
            /*document.getElementById("index1").scrollIntoView();*/
        }
    }

    return (
        <>
            <Link to = {`/facts`}>Facts</Link>
            <h1>Excersices</h1>
            <div className='excersises' onScroll={handleScroll}>
                {levels.map((level, index) => ( 
                    <div className='excersice' key={index} ref={index == count ? myRef : null}>
                        <div>Imaginär bild av cirkeln</div>
                        <p>Glöm inte att skriva ngt om att andas med näsan (tidiga nivåer)</p>
                        <h2>{level.name}</h2>
                        <p className="breathTime">{toSeconds(level.inhale)}s inhale/ {toSeconds(level.exhale)}s exhale</p>
                        <p className="timer">{toMinutes(level.duration)}min</p>
                        <p>Current index: {index}, {count}</p>
                    </div>
                ))}
            </div>    
            <div>
                {levels.map((level, index) => (
                    <span className="dot" key={index} style={{ background: count === index ? "red" : "grey" }}></span>
                ))}
            </div>
        </>
    )
}
export default Excersices;