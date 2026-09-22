import Button from "../Button/Button";
import { Play, Pause, RotateCcw } from "lucide-react";

function Controls({setTotalSeconds,isRunning,setIsRunning, hasStarted,setHasStarted}) {
   function onClickhandler(){
      setIsRunning(prev => !prev);
   }

 function startHandler() {//start the play/puse and reset button with screen
      setHasStarted(true);
      setIsRunning(true);
  }
   function resethandler(){
     setHasStarted(false);
     setIsRunning(false);
     setTotalSeconds(0);//reset everything

   }
   return(
     <>
   
    {!hasStarted? <div>
       <Button type={'Button'} name={<Play/>} onClickhandler={startHandler} styleType={'primary'} />
      </div>:<div>
      <Button type={'Button'} name={isRunning?<Pause/>:<Play/>} onClickhandler={onClickhandler}  styleType={'primary'}/>
      <Button type={'Button'} name={<RotateCcw/>} onClickhandler={resethandler} styleType={'secondary'}/>
     </div>
    }
     </>
   )   
}
export default Controls;