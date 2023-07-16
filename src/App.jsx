import './App.css'
import { useState } from 'react';


// const color = document.getElementById('color');
let nameColor = '#2B807B';
function App() {
    let [color, setColor] = useState('#2B807B')
    function GenerateColorRandom(){
        let digitos  = '0123456789ABCDEF';
        let colorHex = '#';
        for (let i = 0; i < 6; i++){
            let indice = Math.floor(Math.random() *16);
            colorHex += digitos[indice];
        }
        return colorHex;
    }
    function CambiarColor(){
        setColor(!color);
        let colorRandom = GenerateColorRandom();
        color = colorRandom;
        document.body.style.backgroundColor = colorRandom;
        nameColor = String(color)
    }
  return (
    <>
        <div id='container' className='box'>
            <p id="color">{nameColor}</p>
            <button onClick={CambiarColor} id="btn-color">Cambiar Color</button>
        </div>
    </>
  )
}

export default App
