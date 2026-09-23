import Button from "../Button/Button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { isValidMinutes } from "../../utils/InputValidator";

function Controls({setMinutes,minutes,setTotalSeconds,isRunning,setIsRunning, hasStarted,setHasStarted}) {
   function handleToggle(){
      setIsRunning(prev => !prev);
   }

 function handleStart() {

  //first validate the input before starting the timer
    if (!isValidMinutes(minutes)) {
        alert("Please enter a valid number of minutes greater than 0.");
        return;
    }

    //start Button clicked, start the timer
    setTotalSeconds(Number(minutes) * 60);
    setHasStarted(true);
    setIsRunning(true);
}
   function resethandler(){
     setHasStarted(false);
     setIsRunning(false);
     setTotalSeconds(0);//reset everything
     setMinutes('');//reset the input field so when user click on start button again it will be empty and user can enter new value, otherwise it will use the old value and start the timer with that value which is not desired
    
    //RESTART Case:but for re-start will not reset the old minutes value, so user can start the timer again with the same value without re-entering it.

   }

   return(
     <>
   
    {!hasStarted? <div>
       <Button type={'Button'} name={<Play/>} onClickhandler={handleStart} styleType={'primary'} />
      </div>:<div>
      <Button type={'Button'} name={isRunning?<Pause/>:<Play/>} onClickhandler={handleToggle}  styleType={'primary'}/>
      <Button type={'Button'} name={<RotateCcw/>} onClickhandler={resethandler} styleType={'secondary'}/>
     </div>
    }
     </>
   )   
}
export default Controls;