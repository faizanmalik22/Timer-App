function Display({seconds}){
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return <div className="mb-4">{minute<10?`0${minute}`:minute}:{second<10?`0${second}`:second}</div>;
}
export default Display;