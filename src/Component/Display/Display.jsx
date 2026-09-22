import { useState } from "react";
function Display({seconds}){
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return <div className="mb-4">{minute}:{second}</div>;
}
export default Display;