function TimerInput({setMinute}){
    function onChangehandler(e) {
    const value = e.target.value;   // string
    var minute = Number(value);   // number
    //validation
    if(minute===NaN){
        prompt("Enter a valid Minute");
        return;
    }
    setMinute(minute);
}
    return(
        <input 
        type="text" 
        className="w-24 bg-gray-100 border-0 border-b-2 border-gray-400 px-3 py-2 text-center text-xl outline-none focus:border-blue-500 mb-5"
        onChange={onChangehandler}
        />
    )
}
export default TimerInput;