import react, { useState } from "react";
import axios from "axios"

 export const Rectangle = () => {
   const [color,setColor] = useState(null);
   axios.get("http://localhost:4000").then((response)=>{
     setColor(response.data);
     console.log(color)
   },[]);

  return (
    <div>
      <div className="first" style={color}/>
    </div>
  );
};