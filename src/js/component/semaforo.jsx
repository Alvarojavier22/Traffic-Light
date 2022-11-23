import React, { useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("")
    const [colors, setColors] = useState(["red", "yellow", "green"])


    function selectColor(lightColor, index) {
        return (
            <div
                key={index}
                onClick={() => setColor(selectColor)}
                className={color == lightColor ? "selected " + lightColor : "light " + lightColor}>
            </div>
        )
    }

    function lightClick(colorIndex) {
        let newColors = [...colors]
        newColors.splice(colorIndex, 1)
        setColors(newColors)

    }

    function nuevoColor() {
        let nuevoColor = [...colors, "blue"]
        setColors(nuevoColor)
    }

    return (
        <div className="container">
            <div className="poste"></div>
            <div className="semaforo">
                {
                    colors.map(selectColor)
                }
            </div>
            <div>
                <div className="btn-group mt-3 btn btn-primary" role="group" aria-label="Basic example">
                    <button onClick={() => nuevoColor()} type="button" className="btn btn-primary">Añadir Color</button>
                    <button onClick={() => lightClick()} type="button" className="btn btn-primary">Eliminar Color</button>
                </div>
            </div>
        </div>

    )
}

export default TrafficLight