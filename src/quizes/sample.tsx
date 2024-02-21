import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import './sample.css'

function Types() {
    const [types, setTypes] = useState(["Madhuri", "Ande","Panda🐼",""]);
    const [type, setType] = useState(0);
  
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          " Madhuri",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          " Ande",
          1000,
          " Panda🐼",
          1000,
          " golgappe",
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3em", display: "inline-block", color: "#EFA928" }}
        repeat={Infinity}
      />
    );
  }

function Sample(){
    
   return (
    <div id="container333"> 
  

<p id="repeat"><b>Sorry,  </b></p>
<Types/>
</div>
   )
}

export default Sample;