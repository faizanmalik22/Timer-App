function TimerInput({setMinutes}){
    //const minutesRef = useRef("");

function handleChange(e) {
    setMinutes(e.target.value);//dont use setMinutes here bcz i dont want to re-render App when user type
}
    return(         
        <input 
        type="text" 
        className="w-24 bg-gray-100 border-0 border-b-2 border-gray-400 px-3 py-2 text-center text-xl outline-none focus:border-blue-500 mb-5"
        onChange={handleChange}
        placeholder="Minutes"
        />
    )
}
export default TimerInput;