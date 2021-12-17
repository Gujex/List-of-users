import React from "react";
import "./button.css";

function Button() {
  return (
    <div>
      <button  onClick={()=> window.scrollTo(0, 0)} className='viewMore_btn'>Read more..</button>
    </div>
  );
}

export default Button;
