import { useState } from 'react'
import './App.css'
import Button from "./Component/Button/Button";
import TimerControl from './Component/TimerControl/TimerControl'
import TimerInput from './Component/TimerInput/TimerInput'
import Display from './Component/Display/Display';

function App() {
  const [minute,setMinute]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  //  const [reset,setreset]=useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  function onClickhandler(){
    
  }
    return(
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl text-center">
      <h1 className="text-3xl font-bold mb-6">TIMER</h1>

       <TimerInput setMinute={setMinute}/>
       <Display seconds={minute*60}/>
      <TimerControl  setIsRunning={setIsRunning} isRunning={isRunning} hasStarted={hasStarted} setHasStarted={setHasStarted}/>
    </div>
  </div>
       

    )
}

export default App
