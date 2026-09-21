import getStyling from "./getStyling";
function Button({name,type, onClickhandler,styleType}) {
     return(
        <>
         <button
   className={ `${getStyling(styleType)} 
   bg-[#5b5fc7] px-5 py-2.5
  text-sm font-semibold text-white
  rounded-[2px]
  border border-transparent
  shadow-sm
  transition-colors duration-150
  hover:bg-[#4f52b2]
  active:bg-[#4649a0]
  focus:outline-none focus:ring-2 focus:ring-[#5b5fc7] focus:ring-offset-2 ml-3` }
          type={type} onClick={onClickhandler}>{name}</button>
        </>
     )
}
export default Button;