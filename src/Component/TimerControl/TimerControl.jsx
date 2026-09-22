import { useState } from "react";
import Button from "../Button/Button";
import { Play, Pause, RotateCcw } from "lucide-react";

function Controls({isRunning,setIsRunning, hasStarted,setHasStarted}) {
   function onClickhandler(){
      setIsRunning(prev => !prev);
   }

   function resethandler(){
     setHasStarted(prev=>!prev);
   }
   return(
     <>
   
    {!hasStarted? <div>
       <Button type={'Button'} name={<Play/>} onClickhandler={resethandler} styleType={'primary'} />
      </div>:<div>
      <Button type={'Button'} name={isRunning?<Pause/>:<Play/>} onClickhandler={onClickhandler}  styleType={'primary'}/>
      <Button type={'Button'} name={<RotateCcw/>} onClickhandler={resethandler} styleType={'secondary'}/>
     </div>
    }
     </>
   )   
}
export default Controls;