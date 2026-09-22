function TimerInput({setTotalSeconds}){
    function onChangehandler(e) {
    const value = e.target.value;   // string
    var minutes = Number(value);   // number
    //validation
    if(minutes===NaN){
        prompt("Enter a valid Minute");
        return;
    }
    setTotalSeconds(minutes*60);//string as seconds
}
    return(
        <input 
        type="text" 
        className="w-24 bg-gray-100 border-0 border-b-2 border-gray-400 px-3 py-2 text-center text-xl outline-none focus:border-blue-500 mb-5"
        onChange={onChangehandler}
        placeholder="Minutes"
        />
    )
}
export default TimerInput;