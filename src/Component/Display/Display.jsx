import { useState } from "react";
function Display({seconds}){
    const [totalSeconds, setTotalSeconds] = useState(seconds);
    const minute = Math.floor(totalSeconds / 60);
    const second = totalSeconds % 60;
    return <div>{minute}:{second}</div>;
}
export default Display;