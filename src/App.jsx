import { useEffect, useRef, useState } from 'react'
import './App.css'
import Button from "./Component/Button/Button";
import TimerControl from './Component/TimerControl/TimerControl'
import TimerInput from './Component/TimerInput/TimerInput'
import Display from './Component/Display/Display';

function App() {
  const [isRunning,setIsRunning]=useState(false);
  const [hasStarted, setHasStarted] = useState(false);//reset
  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalID=useRef(null);

  //stoping rendering loop by adding isrunning
  
   /*isRunning = true  → timer should run
   isRunning = false → timer should NOT run */

    //if(totalSeconds==0&&isRunning==true){setIsRunning(false)};//when secrem=1 after register make it false.
   //make another effect for this
   
   useEffect(()=>{
     if (totalSeconds === 0 && isRunning){setIsRunning(false)};
   },[totalSeconds, isRunning]);

  useEffect(()=>{
    //setup 
    if(isRunning){
      intervalID.current=setInterval(() => {
        setTotalSeconds(prev=>{
          console.log(prev); //need to stop timer when reset the timer.
          if(prev<=0)return 0;
          return prev-1;
        });//1 , 1 second kam
       
      }, 1000);
    }

  //cleanUp//when unmount and when dependcy changes old one clean before new setup
  return ()=>{
    clearInterval(intervalID.current);
  }
},
  [isRunning]//false pr bhi ye effect run hoga but we dont want to start interval on false thats why if
)
 
    return(
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl text-center">
      <h1 className="text-3xl font-bold mb-6">TIMER</h1>

       {hasStarted? <Display seconds={totalSeconds}/>:<TimerInput setTotalSeconds={setTotalSeconds}/>}
      
      <TimerControl setTotalSeconds={setTotalSeconds} setIsRunning={setIsRunning} isRunning={isRunning} hasStarted={hasStarted} setHasStarted={setHasStarted}/>
    </div>
  </div>
       

    )
}

export default App
