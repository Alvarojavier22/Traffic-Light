import React, { useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("")
    const [colors, setcolors] = useState(["red", "yellow", "green"])


    function selectColor(lightColor, index) {
        return( 
        <div
        key={index}
         onClick={() => lightClick (index)}
         className={color == lightColor ? "seleccionado " + lightColor : "light " + lightColor}>
        </div>
        )
    }

    function lightClick (colorIndex){
        //setColor(colors[colorIndex])
        let newColors=[...colors]
        newColors.splice(colorIndex,1)
        setcolors(newColors)
    }

    function nuevoColor (){
        let nuevoColor = [...colors, "blue"]
        setcolors(nuevoColor)
    }

    return (
        <div>
            <div className="poste"></div>
            <div className="semaforo">
                {
                    colors.map(selectColor)
                }
            </div>
            <button onClick={() => nuevoColor ()} className=" mt-3 m-5 btn btn-primary">Añadir color</button>
        </div>
    )
}

export default TrafficLight